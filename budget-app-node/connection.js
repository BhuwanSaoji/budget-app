const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'database-1.chamkqgaql0o.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'BhuwanSaoji',
  database : 'budget'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});
