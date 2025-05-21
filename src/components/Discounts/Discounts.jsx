import React, { useState, useEffect } from "react";
import styles from "./Discounts.module.css";
import discount1 from "../../assets/DiscountImages/discount1.png";
import discount2 from "../../assets/DiscountImages/discount2.png";
import discount3 from "../../assets/DiscountImages/discount3.png";

function Discounts() {
  const discounts = [discount1, discount2, discount3, discount1, discount2, discount3];
  const slides = [];

  for (let i = 0; i < discounts.length; i += 3) {
    slides.push(discounts.slice(i, i + 3));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.discountsContainer}>
      <div className={styles.carouselViewport}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {slide.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={img}
                  className={styles.discountImg}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dotsDiv}>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export default Discounts;
