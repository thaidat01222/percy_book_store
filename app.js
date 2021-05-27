const express = require('express');
const http = require('http');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');
const e = require('express');
const { count } = require('console');

const app = express();
const port = 4000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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


app.get('/api/trending', (req, res) => {
    var sql = "SELECT * FROM book";
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
    });
});

app.get('/api/lastestupdate', (req, res) => {
    var sql = "SELECT nameofbook FROM book";
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
    });
});


app.post('/login', function (req, res) {
    console.log("da nhan req");
    var user_name = req.body.user;
    var password = req.body.password;
    console.log(user_name + " " + password);
    var sql = "SELECT * FROM `user`"
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        var match = false;
        for (i = 0; i < results.length; i++) {
            if ((user_name == results[i].username) && (password == results[i].password)) {
                console.log(results[i])
                res.status(200).json(results[i]);
                match = true;
            }
        }
        if (match == false) {
            console.log("sai thong tin")
            res.status(400).send;
        }
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));