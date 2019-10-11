var db = require('../db');
var jwt = require('jsonwebtoken');
var today = new Date();

// PROJECTS
exports.getusers = (req, res) => {
    var limit = req.query.limit? req.query.limit: 10;
    var offset = req.query.offset? req.query.offset: 0;
    
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.status(200).json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};

exports.getskills = (req, res) => {
    var limit = req.query.limit? req.query.limit: 10;
    var offset = req.query.offset? req.query.offset: 0;
    
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `SELECT * FROM skills LIMIT ${limit} OFFSET ${offset}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.status(200).json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};

exports.setSkills = (req, res) => {
    let post = {
        "name": req.body.name,
        "parent":'',
        "created": today,
        "modified": today
    };
    // Check if Authorised
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            console.log(post);
            let sql = 'INSERT INTO skills SET ?';
            db.query(sql, post, (err, result) => {
                if (err) throw err;
                res.status(200).json({
                    'code': 200,
                    'result': result
                });
            });
        }
    })

};
exports.getcountries = (req, res) => {
    var limit = req.query.limit? req.query.limit: 10;
    var offset = req.query.offset? req.query.offset: 0;
    
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `SELECT * FROM apps_countries`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.status(200).json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};

// Insert project record into projects table
exports.addclient = (req, res) => {
    console.log(req.body);
    let post = {
        "photo": req.body.photo,
        "name": req.body.name,
        "contact_phone": req.body.contact_phone,
        "status": req.body.status,
        "contact_email": req.body.contact_email,
        "location": req.body.location,
        "refrenced_by": req.body.refrenced_by,
        "created": today,
        "modified": today
    };
    // Check if Authorised
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            console.log(post);
            let sql = 'INSERT INTO clients SET ?';
            db.query(sql, post, (err, result) => {
                if (err) throw err;
                res.status(200).json({
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