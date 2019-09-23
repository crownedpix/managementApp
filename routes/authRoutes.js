var db = require('../db');
var jwt = require('jsonwebtoken');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.sign({user:user}, 'sectretkey');
}

exports.register = function (req, res) {
  var today = new Date();
  var users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "password": req.body.password,
    "roles": req.body.roles,
    "updated_by": req.body.updated_by,
    "created": today,
    "modified": today
  }
  db.query('INSERT INTO users SET ?', users, function (error, results, fields) {
    if (error) {
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      res.send({
        "code": 200,
        "success": "user registered sucessfully"
      });
    }
  });
}

exports.login = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  db.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password == password) {
          var token;
          // jwt.sign({user:results[0]}, 'secretkey', (err, token) => {
            res.send({
              "code": 200,
              "token": tokenForUser(results[0])
            });
          // })
        }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
      }
    }
  });
}