const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'percy-book-store'
});

db.connect(function (err) {
    console.log('Database is connected successfully!');
});

module.exports = db;