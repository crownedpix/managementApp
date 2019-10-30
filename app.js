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
// app.use(Cors());

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
router.get('/deleteproject/:id', verifyToken, project.deleteproject);

// Freelancer Routes
router.post('/addfreelancer', verifyToken, freelancer.addfreelancer);
router.get('/getfreelancers', verifyToken, freelancer.getfreelancers);
router.get('/getfreelancer/:id', verifyToken, freelancer.getfreelancer);
router.get('/deletefreelancer/:id', verifyToken, freelancer.deletefreelancer)

// Client Routes
router.post('/addclient', verifyToken, client.addclient);
router.get('/getclients', verifyToken, client.getclients);
router.get('/getclient/:id', verifyToken, client.getclient);
router.get('/deleteclient/:id', verifyToken, client.deleteclient);

// Others
router.get('/getusers', verifyToken, user.getusers);
router.post('/updateuser/:id', verifyToken, user.updateuser);
router.get('/getskills', user.getskills);
router.post('/setskills', verifyToken, user.setSkills);
router.get('/getcountries', verifyToken, user.getcountries);

// Run app on Port
app.listen(process.env.PORT || '3000',()=> {
// app.listen(process.env.PORT,()=> {
    console.log("Server started on port 3000");
});

setInterval(function() {
    http.get("http://peaceful-sands-57519.herokuapp.com/api/getprojects");
}, 300000);

