import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="content-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1>About Us</h1>

      <p>
        We are a modern consumer electronics store focused on
        delivering stylish and useful technology products.
      </p>

      <p>
        Our product categories include earbuds, smartwatches,
        neckbands and portable speakers.
      </p>

      <div className="about-grid">
        <div>
          <h2>Our Mission</h2>
          <p>
            Make technology simple, stylish and accessible.
          </p>
        </div>

        <div>
          <h2>Our Vision</h2>
          <p>
            Build a better digital shopping experience.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;