var db = require('../db');
var jwt = require('jsonwebtoken');
var today = new Date();

// PROJECTS
exports.getprojects = (req, res) => {
        // var limit = req.query.limit ? req.query.limit : 10;
        // var offset = req.query.offset ? req.query.offset : 0;
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            // let sql = `SELECT * FROM projects  LIMIT ${limit} OFFSET ${offset}`;
            let sql = `SELECT * FROM projects`;
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
exports.addprojects = (req, res) => {
    console.log(req.body);
    let post = {
        "logo": req.body.logo,
        "name": req.body.name,
        "description": req.body.description,
        "skills": req.body.skills,
        "client_id": req.body.client_id,
        "refrenced_by": req.body.refrenced_by,
        "total_freelancer": req.body.total_freelancer,
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
            let sql = 'INSERT INTO projects SET ?';
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
exports.getproject = (req, res) => {
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `SELECT * FROM projects WHERE id = ${req.params.id}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send(result);
            });
        }
    })

};

// // Delete single record in Table
exports.deleteproject = (req, res) => {


    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `DELETE FROM projects WHERE id = ${req.params.id}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                res.status(200).json({
                    'code': 200,
                    'result': result
                });
            });
        }
    })
};