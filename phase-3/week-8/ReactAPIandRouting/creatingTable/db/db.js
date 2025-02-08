import mysql from "mysql2/promise";

// Create connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "evangadi",
  password: "root",
  database: "evangadi",
  connectionLimit: 10,
  waitForConnections: true,
});

// SQL queries for table creation
const ProductTable = `
  CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_link VARCHAR(255)
  );
`;

const ProductDescriptionTable = `
  CREATE TABLE IF NOT EXISTS Product_Description (
    description_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    product_brief_description TEXT,
    product_description TEXT,
    product_img VARCHAR(255),
    product_link VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
  );
`;

const ProductPriceTable = `
  CREATE TABLE IF NOT EXISTS Product_Price (
    price_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    starting_price DECIMAL(10, 2),
    price_range VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
  );
`;

// Data to insert
const ProductData = [
  ["iPhone SE", "https://www.apple.com/in/iphone-se/"],
  ["iPhone 11", "https://www.apple.com/in/iphone-11/"],
  ["iPhone 11 Pro", "https://support.apple.com/en-in/111879"],
];

const ProductPriceData = [
  [1, 399.0, "From $9.54/mo. or $229 with trade-in."],
  [2, 449.0, "From $18.70/mo. or $449 with trade-in."],
  [3, 679.0, "From $28.29/mo. or $679 with trade-in."],
];

const ProductDescriptionData = [
  [
    1,
    "Lots to love. Less to spend.",
    "iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It's just what you've been waiting for.",
    "https://www.evangadi.com/courses/MERN-Stack/misc/iphones/i1.JPG",
    "https://www.apple.com/in/iphone-se/",
  ],
  [
    2,
    "Lots to love. Less to spend.",
    "You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.",
    "https://www.evangadi.com/courses/MERN-Stack/misc/iphones/i2.JPG",
    "https://www.apple.com/in/iphone-11/",
  ],
  [
    3,
    "Pro cameras. Pro display. Pro performance.",
    "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    "https://www.evangadi.com/courses/MERN-Stack/misc/iphones/i3.JPG",
    "https://support.apple.com/en-in/111879",
  ],
];

async function setupDatabase() {
  try {
    // Create tables
    await pool.query(ProductTable);
    console.log("Products table created successfully.");

    await pool.query(ProductDescriptionTable);
    console.log("Product_Description table created successfully.");

    await pool.query(ProductPriceTable);
    console.log("Product_Price table created successfully.");

    // Insert data
    await pool.query("INSERT INTO Products (product_name, product_link) VALUES ?", [ProductData]);
    console.log("Product data inserted successfully.");

    await pool.query("INSERT INTO Product_Price (product_id, starting_price, price_range) VALUES ?", [ProductPriceData]);
    console.log("Product Price data inserted successfully.");

    await pool.query(
      "INSERT INTO Product_Description (product_id, product_brief_description, product_description, product_img, product_link) VALUES ?",
      [ProductDescriptionData]
    );
    console.log("Product Description data inserted successfully.");

    console.log("All database operations completed successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    // Close the pool
    await pool.end();
    console.log("Database connection pool closed.");
  }
}

// Run the setup
setupDatabase();
