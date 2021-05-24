var db = require('./database');
var dataList =[];
var dataName = [];

exports.list = () => {
    return new Promise( (hamOK, hamLoi) => {
        let sql = "SELECT * FROM book";
        db.query(sql, (err, d) => {
            console.log('List success');
            dataList = d;
            hamOK(dataList);
        })
        }
    )
}