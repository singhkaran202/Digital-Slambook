const express = require('express');
const router = express.Router();
const db=require('../database');
const bcrypt = require("bcrypt");

router.use(express.static(__dirname + '/public'));
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;
    var hash =bcrypt.hash(password,10);
 
    var sql='SELECT * FROM registration2 WHERE email_address =?';
    db.query(sql, [emailAddress], function (err, data, fields) {
        if(err) throw err
        
        if(data.length>0){  
            var password_hash= data[0]["password"]
            bcrypt.compare(password, password_hash, function(err, result) {
                if (result) {
                    req.session.loggedinUser= true;
                    req.session.emailAddress= emailAddress;
                    res.redirect('/dashboard');
               }
              else{
                res.render('login',{alertMsg:"Your password is wrong"});
               }
            });
        }
        else{
            res.render('login',{alertMsg:"Your Email Address is wrong"});
           }
})
});

module.exports = router;
