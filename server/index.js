/* import library  */
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());



/* create the connection to database */

const db = mysql.createConnection({
    host: 'localhost', // localhost
    user: 'root',
    password: '',
    database: 'test' // name of database
});

/* api for get data */

app.get('/', function (req, res) {
    res.send('Hello World')
})


/* api for post data */

app.post('/', function (req, res) {
    res.send('Hello World')
})


/* cors open on port 80 */

app.listen(80, function () {
console.log('CORS-enabled web server listening on port 80') 
})