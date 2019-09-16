var db = require('../db');

exports.getposts = (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

// insert post record into posts
exports.addpost = (req, res)=> {
    let post = {title:'Post one', body:'This is post one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts Added...');
    });
};

// get single record in Table
exports.getpost = (req, res)=> {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
};

// // update single record in Table
exports.updatepost = (req, res)=> {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts updated...');
    });
};

// // Delete single record in Table
exports.deletepost = (req, res)=> {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts deleted...');
    });
};