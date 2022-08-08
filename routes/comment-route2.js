var express = require('express');
var router = express.Router();
var db=require('../database');//one folder back is there a database
var bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({extended: true}))
// router.use(express.static(__dirname + '/public'));
// to display registration form 

router.get('/dashboard/user-list/comments', function(req, res, next) {
   if (req.session.loggedinUser){
    var sql='SELECT * FROM comments1';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('comments2', { userData: data});
  });
  }else{
    res.redirect('/login');
  }
});

router.post('/dashboard/user-list/comments', function(req,res,next){
    ourInputData = {
                email_address:req.body.email_address,
                comments: req.body.comment
            }
            var sql="INSERT INTO comments1 (email_address,comments) VALUES ?"
            var values = [[ourInputData.email_address,ourInputData.comments]]
            db.query(sql,[values],function(err,ourInputData,fields){
                if (err) throw (err);
            })
            
    res.redirect('/dashboard/user-list/comments');
})

module.exports = router;
