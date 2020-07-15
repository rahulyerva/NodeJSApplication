const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rahul@1995',
  database: 'user'
});

module.exports = connection;
