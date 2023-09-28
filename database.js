var mysql = require('mysql');
var conn = mysql.createConnection({
  host: process.env.DB_HOST, // assign your host name
  port: process.env.DB_PORT,
  user: process.env.DB_USER,      //  assign your database username
  password: process.env.DB_PASSWORD,      // assign your database password
  database: process.env.DB // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;