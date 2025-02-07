import React, { useEffect, useState } from "react";
import "./Iphone.css";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/product_details")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="iphone">
      <h1>iPhones</h1>
      <p>The best for the brightest.</p>
      <div className="product-container">
        {products.map((product, index) => (
          <div
            className={`product-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={product.Product_id}
          >
            <div className="card1">
              <h1>{product.product_name}</h1>
              <p>{product.Product_brief_description}</p>
              <p>{product.Price_range}</p>

              <Link to={`/product/${product.product_url}`}>
                Learn more <i className="fa-solid fa-greater-than"></i>
              </Link>
            </div>

            <img src={product.Product_img} alt={product.product_name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
