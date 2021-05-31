const express = require('express');
const http = require('http'), fs = require('fs');
const formidable = require('formidable');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');
const e = require('express');
const multer = require("multer");

const app = express();
const port = 4000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
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
    var sql = "SELECT (nameofbook),(image),(id) FROM book ORDER BY countView DESC LIMIT 10";
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
    });
});

app.get('/api/lastestupdate', (req, res) => {
    var sql = `SELECT (nameofbook),(image),(id) FROM book ORDER BY dateUpdate DESC LIMIT 10`;
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
    });
});

app.get('/book/:id' ,(req,res) =>{
    let id = req.params.id;
    var sql = "SELECT * FROM book Where id = "+id;   
    db.query(sql, (err, results)=>{
        if (err) {
            throw err;
        }
        res.json({ booksending: results })
        console.log(results);
    }) 
})

app.post('/signup', function (req, res) {

    console.log('da nhan sign up');
    var name = req.body.name;
    var age = req.body.age;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    console.log(name + " " + age + " " + username + " " + email + " " + password);

    var sql_check = "Select username from `user`";
    var sql_insert = `INSERT INTO user(name, age, username, email, password) VALUES ("${name}","${age}","${username}","${email}","${password}")`;
    db.query(sql_check, (err, results) => {
        if (err) { throw err; }
        var check = true;
        for (i = 0; i < results.length; i++) {
            if ((username == results[i].username)) {
                console.log(results[i])
                check = false;
                res.status(401).send("System: Tai khoan da ton tai");
            }
        }
        if (check) {
            db.query(sql_insert, (err) => {
                if (err) { throw err; }
                res.status(200).send("System: Dang ky thanh cong");
                console.log("System: Da insert vào database")
            })
        }
    })
})

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
        var count = 0;
        console.log("length: " + results.length);
        for (i = 0; i < results.length; i++) {
            if ((user_name != results[i].username) || (password != results[i].password)) {
                console.log("sai roi");
                count++;
                console.log(count);
            }
        }
        if (count == results.length) {
            console.log("System: Sai thong tin");
            res.status(401).send("Sai thong tin");
        }
        for (i = 0; i < results.length; i++) {
            if ((user_name == results[i].username) && (password == results[i].password)) {
                console.log(results[i])
                var loggedInStatus = "true";
                res.status(200).json(results[i]);
            }
        }

    })
})



app.listen(port, () => console.log(`listening on port ${port}`));