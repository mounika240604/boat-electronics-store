import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import products from "../data/products";
import ProductSlider from "../components/Productslider";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  const handleWishlist = () => {
    toggleWishlist(product);

    if (isWishlisted(product.id)) {
      toast("Removed from wishlist");
    } else {
      toast.success("Added to wishlist!");
    }
  };

  return (
    <motion.div
      className="details-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="details-image-section">
        <ProductSlider
          images={product.images}
          name={product.name}
        />
      </div>

      <div className="details-content">
        <p className="category">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <div className="details-price">
          ₹{product.price}
          <del>₹{product.oldPrice}</del>
        </div>

        <p className="description">
          {product.description}
        </p>

        <div className="details-buttons">
          <button
            className="cart-btn large"
            onClick={handleCart}
          >
            Add to Cart
          </button>

          <button
            className="wishlist-btn"
            onClick={handleWishlist}
          >
            {isWishlisted(product.id)
              ? "♥ Wishlisted"
              : "♡ Add to Wishlist"}
          </button>
        </div>

        <div className="features">
          <div>
            🚚
            <span>Fast Delivery</span>
          </div>

          <div>
            🔒
            <span>Secure Payment</span>
          </div>

          <div>
            ↩️
            <span>Easy Returns</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;