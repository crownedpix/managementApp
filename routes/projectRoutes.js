var db = require('../db');
var jwt = require('jsonwebtoken');
var today = new Date();

// PROJECTS
exports.getprojects = (req, res) => {
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = 'SELECT * FROM projects';
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.json({
                    status:200,
                    result: result
                });
            });
        }
    })
};

// Insert project record into projects table
exports.addprojects = (req, res) => {
    console.log(req.body);
    let post = {
        "logo": req.body.logo,
        "name": req.body.name,
        "description": req.body.description,
        "skills": req.body.skills,
        "client_id": req.body.client_id,
        "refrenced_by": req.body.refrenced_by,
        "created": today,
        "modified": today
    };
    // Check if Authorised
 
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            console.log(post);
            let sql = 'INSERT INTO projects SET ?';
            db.query(sql, post, (err, result) => {
                if (err) throw err;
                res.json({
                    'code': 200, 
                    'result': result
                });
            });
        }
    })

};

// get single record in Project table
exports.getpost = (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
};

// // update single record in Table
exports.updatepost = (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts updated...');
    });
};

// // Delete single record in Table
exports.deletepost = (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts deleted...');
    });
};