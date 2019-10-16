const express = require('express');
var project = require('./routes/projectRoutes');
var freelancer = require('./routes/freelancerRoutes');
var client = require('./routes/clientRoutes');
var user = require('./routes/userRoutes');
var auth = require('./routes/authRoutes');
var bodyParser = require('body-parser');
var http = require('http');
var Cors = require('cors');
// Declaration of express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Cors());
// // Creating ACCESS HEADERS
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// Token verification for login auth
verifyToken = (req,res,next)=>{
    var bearerHeader = req.headers['authorization'];
    
    if(typeof bearerHeader !== 'undefined'){
        bearer = bearerHeader.split(' ');
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

var router = express.Router();
// Base route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

// Set sub route
app.use('/api', router);

// Authentication Routes
router.post('/register',auth.register);
router.post('/login',auth.login);

// Project Routes
router.post('/addproject', verifyToken, project.addprojects);
router.get('/getprojects', verifyToken, project.getprojects);
router.get('/getproject/:id', verifyToken, project.getproject);

// Freelancer Routes
router.post('/addfreelancer', verifyToken, freelancer.addfreelancer);
router.get('/getfreelancers', verifyToken, freelancer.getfreelancers);
router.get('/getfreelancer/:id', verifyToken, freelancer.getfreelancer);

// Client Routes
router.post('/addclient', verifyToken, client.addclient);
router.get('/getclients', verifyToken, client.getclients);
router.get('/getclient/:id', verifyToken, client.getclient);

// Others
router.get('/getusers', verifyToken, user.getusers);
router.get('/getskills', verifyToken, user.getskills);
router.post('/setskills', verifyToken, user.setSkills);
router.get('/getcountries', verifyToken, user.getcountries);

// Run app on Port
app.listen(process.env.PORT || '3000',()=> {
// app.listen(process.env.PORT,()=> {
    console.log("Server started on port 3000");
});

setInterval(function() {
    http.get("https://peaceful-sands-57519.herokuapp.com/api/");
}, 300000);

// app.set('port',process.env.PORT);
// http.createServer(app).listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });

// SAMPLES

// // Create Table
// app.get('/createtable', (req, res)=> {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Table Created...');
//     });
// });

//route to handle Posts CRUD
// router.get('/getposts',posts.getposts);
// router.get('/getpost/:id',posts.getpost);
// router.get('/updatepost/:id',posts.updatepost);
// router.get('/deletepost/:id',posts.deletepost);