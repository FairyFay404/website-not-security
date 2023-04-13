/* import library  */
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
var jwt = require('jsonwebtoken');
const strToken = "WEb-is-not-seCurE000";
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const saltRounds = 10;
const SALT = "NOT_SO_SECURE_SALT";
const fs = require('fs');

app.use(cors());

const jsonParser = bodyParser.json()
const raw = fs.readFileSync("config.json");
const config = JSON.parse(raw);

const db = mysql.createConnection({
	host: config['host'],
	user: config['user'],
	database: config['database'],
	password: config['password']
});

app.post('/api/login', jsonParser, function (req, res) {
	try{
		const hashedPassword = crypto.createHash("sha3-256").update(req.body.password).digest("hex");
		const query = `SELECT COUNT(*) as count FROM users WHERE username='${req.body.username}' AND password='${hashedPassword}'`
		db.query(
			query,
			[],
			function(err, results){
				if(err){
					res.json({status: "fail", message: err.message});
					return;
				}
				if(results != undefined || results.length > 0){
					if(results[0]['count'] > 0){
						const token = jwt.sign({ username: req.body.username }, strToken, { expiresIn: '1h' }); // gen token for 1 hours
						res.json({status: "success", message: "Log-in Successful!!", token: token});
						return;
					}
				}
				res.json({status: "fail", message: "No User in System!!"});
				return;
			}
		);
	}catch(error){
		res.json({status: "fail", message: error.message});
	}
})

app.post('/api/register', jsonParser, function (req, res) {
	try{
		const hashedPassword = crypto.createHash("sha3-256").update(req.body.password).digest("hex");
		db.query(
			'INSERT INTO users(username, password, fName, lName, email) VALUES(?,?,?,?,?)',
			[req.body.username, hashedPassword, req.body.fName, req.body.lName, req.body.email],
			function(err, results){ 
				if(err){
					res.json({status: "failed", message: error.message});
				}else{
					res.json({status: "success", message: "Register Successful!!"});
				}
			}
		);
	}catch(error){
		res.json({status: "fail", message: error.message});
	}
});

app.post('/api/authen', jsonParser, function(req ,res) {
	var token = req.headers.authorization.split(" ")[1];
	console.log(token);
	try {
		var decoded = jwt.verify(token, strToken);
		res.json({status: "success", decoded: decoded});
	} catch(err) {
		res.json({status: "fail", message: err.message});
	}
});


/* cors open on port 80 */

app.listen(5000, function () {
	console.log('CORS-enabled web server listening on port 5000');
})