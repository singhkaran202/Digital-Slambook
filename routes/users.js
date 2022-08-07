var express = require('express');
var router = express.Router();
var db=require('../database');

router.use(express.static(__dirname + '/public'));
 
router.get('/dashboard/user-list', function(req, res, next) {
    var sql='SELECT * FROM registration2';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { userData: data});
  });
});

router.post('/dashboard/user-list', function(req,res){
  res.redirect('/dashboard/user-list')
})



module.exports = router;