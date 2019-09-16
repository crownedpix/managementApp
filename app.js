const express = require('express');
var posts = require('./routes/postsRoutes');
var auth = require('./routes/authRoutes');

var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Creating ACCESS HEADERS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var router = express.Router();
// Base route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle Posts CRUD
router.get('/getposts',posts.getposts);
router.get('/getpost/:id',posts.getpost);
router.get('/updatepost/:id',posts.updatepost);
router.get('/deletepost/:id',posts.deletepost);

router.get('/createUser',auth.createuser);
app.use('/api', router);

// // Create Table
// app.get('/createtable', (req, res)=> {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Table Created...');
//     });
// });



app.listen('3000',()=> {
    console.log("Server started on port 3000");
});