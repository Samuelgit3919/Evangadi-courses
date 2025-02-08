// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3001;

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle POST request
app.post("/add-product", (req, res) => {
  const { name, price, description } = req.body;

  const sql = `
    INSERT INTO products (name, price, description)
    VALUES (?, ?, ?)
  `;

  connection.query(sql, [name, price, description], (err) => {
    if (err) {
      res.status(500).send("Error inserting product: " + err.message);
    } else {
      res.send("Product added successfully!");
    }
  });
});
