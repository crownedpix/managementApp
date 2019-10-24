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
                // console.log(result);
                res.status(200).json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};

exports.getskills = (req, res) => {
    // var limit = req.query.limit? req.query.limit: 10;
    // var offset = req.query.offset? req.query.offset: 0;
    
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            // let sql = `SELECT * FROM skills LIMIT ${limit} OFFSET ${offset}`;
            let sql = `SELECT * FROM skills`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                // console.log(result);
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
            // console.log(post);
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
                // console.log(result);
                res.status(200).json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};


// // update single record in Table
exports.updateuser = (req, res) => {
    
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `UPDATE users SET first_name = '${req.body.first_name}',last_name = '${req.body.last_name}' WHERE id = ${req.params.id}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                res.status(200).json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};

// // Delete single record in Table
exports.deletepost = (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send('Posts deleted...');
    });
};