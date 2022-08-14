const express = require('express');
const router = express.Router();
const db=require('../database');

router.use(express.static(__dirname + '/public'));
 
router.get('/dashboard/user-list', function(req, res, next) {
  if (req.session.loggedinUser){
    var sql='SELECT * FROM registration2';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { userData: data});
  });
  }else{
    res.redirect('/login');
  }
  
});

router.post('/dashboard/user-list', function(req,res){
  res.redirect('/dashboard/user-list')
})



module.exports = router;
