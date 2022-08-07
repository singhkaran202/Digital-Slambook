var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '127.0.0.1', // assign your host name
  user: 'newuser',      //  assign your database username
  password: 'password#1',      // assign your database password
  database: 'userdb' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;