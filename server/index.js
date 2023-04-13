/* import library  */
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
var jwt = require('jsonwebtoken');
const strToken = "WEb-is-not-seCurE000";
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors());

/* create application/json parser */
const jsonParser = bodyParser.json()

/* create the connection to database */

const db = mysql.createConnection({
    host: 'localhost', // localhost
    user: 'root',
    database: 'test', // name of database
    password: 'Cyber101#Injection'
});



/* api for get data */


/* api for post data */

app.post('/login', jsonParser, function (req, res) {
    db.query(
        'SELECT password FROM Users WHERE username = ?',
        [req.body.username],
        function(err, results) 
        {
            /* if something error  */
            if(err) 
            {
                res.json({status: "fail", message: "Something Error!!"});
            }
            
            /* if user doesn't exist in database */
            if( results.length == 0)
            {
                res.json({status: "fail", message: "No User in System!!"});
                
            }

            /* if user is exist in database */
            
            bcrypt.compare(req.body.password, results[0].password, function(err, isLogin) {
                if(isLogin)
                {   
                    const token = jwt.sign({ username: req.body.username }, strToken, { expiresIn: '1h' }); // gen token for 1 hours
                    res.json({status: "success", message: "Log-in Successful!!", token: token});
                }
                else 
                {
                    res.json({status: "fail", message: "Password is not correct!"});
                }
            });
        }
    );
})



app.post('/register', jsonParser, function (req, res) {
    /* 1. hash password of users  */
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

        /* 2. insert data of users to database */
        db.query(
            'INSERT INTO users(username, password, fName, lName, email) VALUES(?,?,?,?,?)',
            [req.body.username, hash, req.body.fName, req.body.lName, req.body.email],
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
    });

});

app.post('/authen', jsonParser, function(req ,res) {
    var token = req.headers.authorization.split(" ")[1];
    try {
        var decoded = jwt.verify(token, strToken);
        res.json({status: "success", decoded: decoded});
    }
    catch(err) {
        res.json({status: "fail", message: err.message});
    }
});


/* cors open on port 80 */

app.listen(5000, function () {
console.log('CORS-enabled web server listening on port 5000');
})