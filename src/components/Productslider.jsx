import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ProductSlider({ images, name }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider">
      <motion.img
        key={current}
        src={images[current]}
        alt={name}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <button className="slider-prev" onClick={previous}>
        ‹
      </button>

      <button className="slider-next" onClick={next}>
        ›
      </button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;