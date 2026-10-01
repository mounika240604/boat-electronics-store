import { useState } from "react";
import { motion } from "framer-motion";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <motion.div
        className="page-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Explore Products</h1>
        <p>Discover your favourite tech products.</p>
      </motion.div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="filters">
        {[
          "All",
          "Earbuds",
          "Smartwatch",
          "Neckband",
          "Speaker",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={
              category === item ? "filter active" : "filter"
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="empty">
            <h2>No Products Found</h2>
            <p>Try another search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;