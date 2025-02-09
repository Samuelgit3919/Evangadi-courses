// // const mysql = require('mysql');
// import mysql from "mysql2/promise";

// // Create a connection pool
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "week-3",
//   password: "root",
//   database: "week-3",
// });

// // Test the database connection
// const connectToDatabase = async () => {
//   try {
//     const connection = await pool.getConnection();
//     console.log("Successfully connected to MySQL database");
//     connection.release();
//   } catch (err) {
//     console.error("Error connecting to MySQL:", err.message);
//   }
// };

// connectToDatabase();

// export default pool;
