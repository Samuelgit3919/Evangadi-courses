const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "sami",
  password: "root",
  database: "mydbuser",
  connectionLimit: 10,
});

module.exports = pool;
