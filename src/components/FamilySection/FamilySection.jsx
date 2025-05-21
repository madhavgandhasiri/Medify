import React from "react";
import styles from "./FamilySection.module.css";
import hpyPatients from "../../assets/FamilySection/happyPatients.png"
import hospitals from "../../assets/FamilySection/hospital.png"
import laboratories from "../../assets/FamilySection/laboratory.png"
import doctors from "../../assets/FamilySection/doctor.png"

function FamilySection() {
  return (
    <div className={styles.familySectionContainer}>
      <div className={styles.leftDiv}>
        <p
          style={{
            fontWeight: "600",
            fontSize: "17px",
            color: "#2AA7FF",
          }}
        >
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <h2>Our Families</h2>
        <p
          style={{
            fontWeight: "500",
            fontSize: "17px",
            color: "#77829D",
            lineHeight: "2.5rem",
          }}
        >
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.rightDiv}>
        <div>
          <div className={styles.card1}>
            <img src={hpyPatients} alt="image1" />
            <h2>5000+</h2>
            <p>Happy Patients</p>
          </div>
          <div className={styles.card2}>
          <img src={laboratories} alt="image2" />
            <h2>1000+</h2>
            <p>Laboratories</p>
          </div>
        </div>
        <div>
          <div className={styles.card3}>
          <img src={hospitals} alt="image3" />
            <h2>200+</h2>
            <p>Hospitals</p>
          </div>
          <div className={styles.card4}>
          <img src={doctors} alt="image4" />
            <h2>700+</h2>
            <p>Expert Doctors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilySection;
