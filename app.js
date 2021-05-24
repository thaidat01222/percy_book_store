const express = require('express');
const http = require('http');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');




const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'percy-book-store'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/trending', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var sql = "SELECT * FROM book";
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
        console.log(results)
    });
});

app.get('/api/lastestupdate', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var sql = "SELECT nameofbook FROM book";
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
        console.log(results)
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));