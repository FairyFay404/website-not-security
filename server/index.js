/* import library  */
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

app.use(cors());

/* create application/json parser */
var jsonParser = bodyParser.json()

/* create the connection to database */

const db = mysql.createConnection({
    host: 'localhost', // localhost
    user: 'root',
    password: '',
    database: 'test' // name of database
});

/* api for get data */

app.get('/login', jsonParser, function (req, res) {
    db.query(
        'SELECT password FROM Users WHERE username = ?',
        [req.body.username],
        function(err, results) 
        {
            if( results[0].password == req.body.password) 
            {
                res.json({status: "success", message: "Log-in Successful!!", username: results[0].username});
                
            }
            else
            {
                res.json({status: "fail", message: "Log-in Failed!! "});
            }
        }
    );
})


/* api for post data */

app.post('/', jsonParser, function (req, res) {
    db.query(
        'INSERT INTO test VALUES(?,?,?,?,?)',
        [req.body.username, req.body.password, req.body.fName, req.body.lName, req.body.email],
        function(err, results){
            if(err)
            {
                res.json({status: "failed", message: "Register Failed!!"});
            }
            else{
                res.json({status: "success", message: "Register Successful!!"});
            }
        }
    );
})


/* cors open on port 80 */

app.listen(5000, function () {
console.log('CORS-enabled web server listening on port 5000');
})