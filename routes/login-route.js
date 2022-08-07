var express = require('express');
var router = express.Router();
var db=require('../database');
var bcrypt = require("bcrypt");

router.use(express.static(__dirname + '/public'));
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login-form');
});

router.post('/login', function(req, res){
    var emailAddress = req.body.email_address;
    var password = req.body.password;
    var hash =bcrypt.hash(password,10);
    
    var sql='SELECT * FROM registration2 WHERE email_address =?';
    db.query(sql, [emailAddress, hash], function (err, data, fields) {
        if(err) throw err
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.emailAddress= emailAddress;
            res.redirect('/dashboard');
        }else{
            res.render('login-form',{alertMsg:"Your Email Address or password is wrong"});
        }
    })

})

module.exports = router;