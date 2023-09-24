const express = require('express');
const router = express.Router();
const db=require('../database');//one folder back is there a database
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt");

router.use(express.static(__dirname + '/public'));
// to display registration form 
router.get('/register', function(req, res) {
  res.render('register');
});

router.use(bodyParser.urlencoded({extended: true}))


// to store user input detail on post request
router.post('/register', function(req, res, next) {
    
inputData= {
    namee: req.body.name,
    department:  req.body.department,
    email_address: req.body.email_address,
    hostel: req.body.hostel,
    password: req.body.password
}
// check unique email address
var sql='SELECT * FROM registration2 WHERE email_address =?';
db.query(sql, [inputData.email_address] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.email_address+ "was already exist";
 }else{
   var password=inputData.password;
   var namee=inputData.namee;
   var department=inputData.department;
   var email_address=inputData.email_address;
   var hostel=inputData.hostel;

   bcrypt.hash(password,10, function(err, hash) { 
    var sql = "INSERT INTO registration2 (name,department,email_address,hostel,password) VALUES ?";
    var values = [[namee,department,email_address,hostel,hash]]
    db.query(sql,[values], function (err, inputData, fields) {
    if (err) throw err;
    });
    var msg ="You are successfully registered";
   });
   res.render('register',{alertMsg:msg});
 }
});
});


module.exports = router;
