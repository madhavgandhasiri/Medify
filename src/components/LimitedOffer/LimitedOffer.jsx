import React from "react";
import styles from "./LimitedOffer.module.css"

function LimitedOffer() {
  return (
    <div className={styles.limitedOfferDiv}>
      <p className={styles.limitedOfferTitle}>This World Oral Health Day,</p>
      <h2>
        Get a <span style={{ color: "#2AA8FF" }}>FREE</span> Appointment*
      </h2>
      <h2>with Top Dentists</h2>
      <p
        style={{
          backgroundColor: "#2AA8FF",
          color: "white",
          padding: "2px",
          borderRadius: "2px",
        }}
      >
        LIMITED PERIOD OFFER
      </p>
      <p style={{ color: "#2AA8FF" }}>#BeSensitiveToOralHealth</p>
      <p style={{ fontSize: "0.4rem" }}>
        *T&C Apply - only consultation fee. Procedure / surgeries not covered
      </p>
    </div>
  );
}

export default LimitedOffer;
