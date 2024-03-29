const express = require('express');
const router = express.Router();
const db=require('../database');//one folder back is there a database
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({extended: true}))
// router.use(express.static(__dirname + '/public'));
// to display registration form 

router.get('/dashboard/user-list/comments', function(req, res, next) {
   if (req.session.loggedinUser){
    const email= req.session.emailAddress;
    var sql='SELECT * FROM comments3';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('comments2', { userData: data, email:email});
  });
  }else{
    res.redirect('/');
  }
});

router.post('/dashboard/user-list/comments', function(req,res,next){
    ourInputData = {
                email_address:req.session.emailAddress,
                to_email_address:req.body.to_email_address,
                comments: req.body.comment
            }
            var sql="INSERT INTO comments3 (email_address,to_email_address,comments) VALUES ?"
            var values = [[ourInputData.email_address,ourInputData.to_email_address,ourInputData.comments]]
            db.query(sql,[values],function(err,ourInputData,fields){
                if (err) throw (err);
            })
            
    res.redirect('/dashboard/user-list/comments');
})

module.exports = router;
