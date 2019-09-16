var db = require('../db');

exports.createuser = (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};