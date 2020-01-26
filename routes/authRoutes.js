var db = require('../db');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.sign({user:user}, 'sectretkey');
}

exports.register = function (req, res) {
  var today = new Date();
  var users = {};
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    users = {
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      "email": req.body.email,
      "password": hash,
      "roles": req.body.roles,
      "created": today,
      "modified": today
    }
    db.query('INSERT INTO users SET ?', users, function (error, results, fields) {
      if (error) {
        res.status(400).send({
          "status": 400,
          "failed": "error ocurred",
          "error": error
        })
      } else {
        res.status(200).send({
          "status": 200,
          "success": "user registered sucessfully"
        });
      }
    });
  });
  
}

exports.login = function (req, response) {
  var email = req.body.email;
  var password = req.body.password;
  db.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      response.status(400).send({
        "code": 400,
        "failed": "error ocurred",
        "error": error
      })
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, res) {
          if(res) {
            var token;
            delete results[0].password;
            response.status(200).send({
                "status": 200,
                "token": tokenForUser(results[0]),
                "result": results[0],
                "res": res
              });
          } else {
            response.status(401).send({
              "status": 204,
              "success": "Email and password does not match",
              
            });
          } 
        });
      }
      else {
        response.status(401).send({
          "status": 401,
          "success": "Email does not exits"
        });
      }
    }
  });
}