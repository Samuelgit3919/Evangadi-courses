// Import required modules
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "week-3",
  password: "root",
  database: "week-3",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Route to create tables
app.get("/install", (req, res) => {
  const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS products (
      product_id INT AUTO_INCREMENT PRIMARY KEY,
      product_url VARCHAR(255),
      product_name VARCHAR(100)
    );
    
    CREATE TABLE IF NOT EXISTS product_descriptions (
      description_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      product_brief_description TEXT,
      product_description TEXT,
      product_img VARCHAR(255),
      product_link VARCHAR(255),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
    
    CREATE TABLE IF NOT EXISTS product_prices (
      price_id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      starting_price VARCHAR(50),
      price_range VARCHAR(255),
      FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
  `;

  db.query(createTablesQuery, (err) => {
    if (err) {
      console.error("Error creating tables:", err);
      res.send("Error setting up database");
    } else {
      res.send("Tables created successfully");
    }
  });
});

// Route to insert data from form
app.post("/add-product", (req, res) => {
  const {
    product_url,
    product_name,
    brief_description,
    description,
    img,
    link,
    price,
    price_range,
  } = req.body;

  // console.log(req.body);

  const insertProductQuery = `INSERT INTO products (product_url, product_name) VALUES (?, ?)`;
  db.query(insertProductQuery, [product_url, product_name], (err, result) => {
    if (err) {
      console.error("Error inserting product:", err);
      return res.status(500).send("Database insertion error");
    }

    const productId = result.insertId;

    const insertDescriptionQuery = `INSERT INTO product_descriptions (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)`;
    db.query(
      insertDescriptionQuery,
      [productId, brief_description, description, img, link],
      (err) => {
        if (err) console.error("Error inserting description:", err);
      }
    );

    const insertPriceQuery = `INSERT INTO product_prices (product_id, starting_price, price_range) VALUES (?, ?, ?)`;
    db.query(insertPriceQuery, [productId, price, price_range], (err) => {
      if (err) console.error("Error inserting price:", err);
    });

    res.send("Product added successfully");
  });
});

// Route to get all products
app.get("/get-products", (req, res) => {
  const getProductsQuery = `
    SELECT p.product_id, p.product_name, p.product_url, pd.product_brief_description, pd.product_description, pd.product_img, pd.product_link, pp.starting_price, pp.price_range 
    FROM products p 
    LEFT JOIN product_descriptions pd ON p.product_id = pd.product_id 
    LEFT JOIN product_prices pp ON p.product_id = pp.product_id
  `;
  db.query(getProductsQuery, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).send("Database fetch error");
    }
    res.json(results);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
