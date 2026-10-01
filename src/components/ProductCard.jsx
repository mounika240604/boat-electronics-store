import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const handleCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleWishlist = () => {
    const alreadyWishlisted = isWishlisted(product.id);

    toggleWishlist(product);

    if (alreadyWishlisted) {
      toast("Removed from wishlist");
    } else {
      toast.success("Added to wishlist!");
    }
  };

  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="product-image">
        <img
          src={product.images[0]}
          alt={product.name}
        />

        <button
          className="heart-btn"
          onClick={handleWishlist}
        >
          {isWishlisted(product.id) ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <p className="category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <div className="price">
          <strong>₹{product.price}</strong>
          <del>₹{product.oldPrice}</del>
        </div>

        <div className="card-buttons">
          <Link
            to={`/products/${product.id}`}
            className="view-btn"
          >
            View
          </Link>

          <button
            className="cart-btn"
            onClick={handleCart}
          >
            Add Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;