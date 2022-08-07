var express = require('express');
var router = express.Router();
var db=require('../database');

router.use(express.static(__dirname + '/public'));
/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        res.render('dashboard',{email:req.session.emailAddress})
    }else{
        res.redirect('/login');
    }
});
module.exports = router;