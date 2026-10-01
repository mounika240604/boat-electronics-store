import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      icon: "🎧",
      title: "Earbuds",
      text: "Immersive sound",
    },
    {
      icon: "⌚",
      title: "Smartwatches",
      text: "Stay connected",
    },
    {
      icon: "🎵",
      title: "Neckbands",
      text: "Music on the go",
    },
    {
      icon: "🔊",
      title: "Speakers",
      text: "Powerful audio",
    },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick and reliable delivery",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "100% safe checkout",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "Simple return process",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      text: "We're here to help",
    },
  ];

  return (
    <div className="home">

      {/* ================= HERO ================= */}
      <section className="hero premium-hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-label">
            NEW COLLECTION
          </span>

          <h1>
            Technology
            <br />
            <span>That Moves With You.</span>
          </h1>

          <p>
            Discover powerful audio, smart watches and
            lifestyle technology designed for your everyday life.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-btn"
            >
              Shop Now →
            </Link>

            <Link
              to="/about"
              className="hero-outline-btn"
            >
              Explore More
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>16+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>4.5★</strong>
              <span>Rating</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>
        </motion.div>

      </section>


      {/* ================= CATEGORY ================= */}
      <section className="section category-section">

        <div className="section-heading">
          <span className="small-label">
            EXPLORE
          </span>

          <h2>Shop By Category</h2>

          <p>
            Find the perfect technology for your lifestyle
          </p>
        </div>

        <div className="category-grid">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              className="category-card premium-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <Link to="/products">

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.text}
                </p>

                <span className="category-arrow">
                  Explore →
                </span>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section featured-section">

        <div className="section-heading featured-heading">

          <div>
            <span className="small-label">
              BEST PICKS
            </span>

            <h2>
              Featured Products
            </h2>

            <p>
              Our most popular products
            </p>
          </div>

          <Link
            to="/products"
            className="view-all-btn"
          >
            View All →
          </Link>

        </div>

        <div className="product-grid">

          {featuredProducts.map((product) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>

          ))}

        </div>

      </section>


      {/* ================= PROMO ================= */}
      <section className="promo-section">

        <div className="promo-content">

          <span>
            POWER YOUR EVERYDAY
          </span>

          <h2>
            Upgrade Your
            <br />
            Everyday Technology.
          </h2>

          <p>
            Premium audio and smart devices made for
            work, travel, fitness and entertainment.
          </p>

          <Link
            to="/products"
            className="promo-btn"
          >
            Explore Products →
          </Link>

        </div>

        <div className="promo-shape">
          ✦
        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">

        <div className="section-heading">

          <span className="small-label">
            OUR PROMISE
          </span>

          <h2>
            Why Choose Us?
          </h2>

          <p>
            Everything you need for a better shopping experience.
          </p>

        </div>

        <div className="why-grid">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;