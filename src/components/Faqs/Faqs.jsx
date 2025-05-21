import React from "react";
import styles from "./Faqs.module.css";
import image from "../../assets/faqs.png";
import { FaPlus } from "react-icons/fa";

function Faqs() {
  return (
    <div className={styles.faqsContainer}>
      <p
        style={{
          fontWeight: "600",
          fontSize: "1rem",
          color: "#2AA7FF",
        }}
      >
        Get Your Answer
      </p>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqsInfDiv}>
        <img src={image} alt="Image1" />
        <div>
          <ul className={styles.list}>
            <li>
              <p>Why choose our medical for your family?</p>
              <FaPlus color="#2AA7FF" />
            </li>
            <li>
              <p>Why we are different from others?</p>
              <FaPlus color="#2AA7FF" />
            </li>
            <li>
              <p>Trusted & experience senior care & love</p>
              <FaPlus color="#2AA7FF" />
            </li>
            <li>
              <p>How to get appointment for emergency cases?</p>
              <FaPlus color="#2AA7FF" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
