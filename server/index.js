/* import library  */
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
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
    database: 'test' // name of database
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
                    res.json({status: "success", message: "Log-in Successful!!", username: results[0].username});
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


/* cors open on port 80 */

app.listen(5000, function () {
console.log('CORS-enabled web server listening on port 5000');
})