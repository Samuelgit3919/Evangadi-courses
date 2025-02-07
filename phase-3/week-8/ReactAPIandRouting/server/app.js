const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/api/product_details", async (req, res) => {
  try {
    const query = `
      SELECT 
        p.product_name,
        pr.Price_range,
        pd.* 
      FROM product_description pd
      INNER JOIN Products p 
        ON pd.product_id = p.product_id
      INNER JOIN Product_Price pr
        ON pr.Product_id = p.product_id
    `;

    const [results] = await pool.query(query);
    res.json(results);
  } catch (err) {
    console.error("Error executing the query:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
