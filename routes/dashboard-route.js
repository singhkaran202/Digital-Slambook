const express = require('express');
const router = express.Router();
const db=require('../database');

router.use(express.static(__dirname + '/public'));
/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
    if(req.session.loggedinUser){
        const email= req.session.emailAddress;
        var sql='SELECT * FROM registration2';
        db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.render('dashboard',{userData: data, email: email});
        });
    }else{
        res.redirect('/login');
    }
});
module.exports = router;
