var db = require('../db');
var jwt = require('jsonwebtoken');
var today = new Date();

// PROJECTS
exports.getfreelancers = (req, res) => {
    jwt.verify(req.token, 'sectretkey', (err, authData) => {
        if (err) {
            res.json({
                status: 403,
                message: "Authentication failed"
            });
        } else {
            let sql = 'SELECT * FROM freelancers';
            db.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.json({
                    status: 200,
                    result: result
                });
            });
        }
    })
};

// Insert project record into projects table
exports.addfreelancer = (req, res) => {
    console.log(req.body);
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
            let sql = 'INSERT INTO freelancers SET ?';
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