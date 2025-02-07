const pool = require("./db");

// Create tables and insert data
const setupDatabase = async () => {
  let connection;
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();

    // Create Products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        product_url VARCHAR(255) NOT NULL,
        product_name VARCHAR(255) NOT NULL
      )
    `);
    console.log("Products table created successfully!");

    // Insert data into Products table
    await connection.query(
      `
      INSERT INTO Products (product_id, product_url, product_name)
      VALUES ?
    `,
      [
        [
          [1, "https://www.apple.com/in/iphone-se/", "iPhone SE"],
          [2, "https://www.apple.com/in/iphone-11/", "iPhone 11"],
          [3, "https://support.apple.com/en-in/111879", "iPhone 11 Pro"],
        ],
      ]
    );
    console.log("Data inserted into Products table successfully!");

    // Create Product_Description table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Product_Description (
        Description_id INT AUTO_INCREMENT PRIMARY KEY,
        Product_id INT NOT NULL,
        Product_brief_description TEXT,
        Product_description TEXT,
        Product_img VARCHAR(255),
        Product_link VARCHAR(255),
        FOREIGN KEY (Product_id) REFERENCES Products(product_id)
      )
    `);
    console.log("Product_Description table created successfully!");

    // Insert data into Product_Description table
    await connection.query(
      `
      INSERT INTO Product_Description (Description_id, Product_id, Product_brief_description, Product_description, Product_img, Product_link)
      VALUES ?
    `,
      [
        [
          [
            1,
            1,
            "Lots to love. Less to spend.",
            "iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.",
            "https://www.evangadi.com/courses/MERN-Stack/misc/iphones/i3.JPG",
            "https://www.apple.com/in/iphone-se/",
          ],
          [
            2,
            2,
            "Lots to love. Less to spend.",
            "You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.",
            "https://www.evangadi.com/courses/MERN-Stack/misc/iphones/i2.JPG",
            "https://www.apple.com/in/iphone-11/",
          ],
          [
            3,
            3,
            "Pro cameras. Pro display. Pro performance.",
            "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
            "https://www.evangadi.com/courses/MERN-Stack/misc/iphones/i1.JPG",
            "https://support.apple.com/en-in/111879",
          ],
        ],
      ]
    );
    console.log("Data inserted into Product_Description table successfully!");

    // Create Product_Price table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Product_Price (
        Price_id INT AUTO_INCREMENT PRIMARY KEY,
        Product_id INT NOT NULL,
        Starting_price VARCHAR(50),
        Price_range VARCHAR(255),
        FOREIGN KEY (Product_id) REFERENCES Products(product_id)
      )
    `);
    console.log("Product_Price table created successfully!");

    // Insert data into Product_Price table
    await connection.query(
      `
      INSERT INTO Product_Price (Price_id, Product_id, Starting_price, Price_range)
      VALUES ?
    `,
      [
        [
          [1, 1, "$399", "From $9.54/mo. or $229 with trade-in."],
          [2, 2, "$449", "From $18.70/mo. or $449 with trade-in."],
          [3, 3, "$679", "From $28.29/mo. or $679 with trade-in."],
        ],
      ]
    );
    console.log("Data inserted into Product_Price table successfully!");
  } catch (err) {
    console.error("Error setting up database:", err);
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
    pool.end(); // Close the connection pool
  }
};

setupDatabase();
