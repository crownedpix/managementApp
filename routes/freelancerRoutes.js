var db = require('../db');
var jwt = require('jsonwebtoken');
var today = new Date();

// Freelancers
exports.getfreelancers = (req, res) => {
    // var limit = req.query.limit? req.query.limit: 10;
    // var offset = req.query.offset? req.query.offset: 0;
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            // let sql = `SELECT * FROM freelancers LIMIT ${limit} OFFSET ${offset}`;
            let sql = `SELECT * FROM freelancers`;
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

// Insert record into table
exports.addfreelancer = (req, res) => {
    // console.log(req.body);
    let post = {
        "photo": req.body.photo,
        "name": req.body.name,
        "contact_phone": req.body.contact_phone,
        "status": req.body.status,
        "contact_email": req.body.contact_email,
        "last_worked": today,
        "joined": today,
        "task_id": req.body.task_id,
        "bank_name": req.body.bank_name,
        "bank_account_no": req.body.bank_account_no,
        "bank_ifsc": req.body.ifsc,
        "bank_linked_phone": req.body.bank_linked_phone,
        "BHIM_number": req.body.BHIM_number,
        "rating": req.body.rating,
        "notes": req.body.notes,
        "skill": req.body.skill,
        "project_id": req.body.project_id,
        "location": req.body.location,
        "refrenced_by": req.body.refrenced_by,
        "designation": req.body.designation,
        "experience": req.body.experience,
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
            let sql = 'INSERT INTO freelancers SET ?';
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

// get single record in table
exports.getfreelancer = (req, res) => {
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `SELECT * FROM freelancers WHERE id = ${req.params.id}`;
            db.query(sql, (err, result) => {
                if (err) throw err;
                // console.log(result);
                res.send(result);
            });
        }
    })

};


// // Delete single record in Table
exports.deletefreelancer = (req, res) => {
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.status(403).json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = `DELETE FROM freelancers WHERE id = ${req.params.id}`;
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