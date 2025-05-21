import React from "react";
import styles from "./PatientCaring.module.css";
import { HiBadgeCheck } from "react-icons/hi";
import image1 from "../../assets/PatientCaring/655bc5ee65d5b807171dc49fec96d7ce51d323d1.png";
import image2 from "../../assets/PatientCaring/fc60e3eb123cc4f6b10a8de7f4969c5b21b3227b.png";
import { FaPhoneVolume } from "react-icons/fa6";

function PatientCaring() {
  return (
    <div className={styles.PatientCaringContainer}>
      <div className={styles.leftDiv}>
        <img className={styles.image1} src={image1} alt="image1" />
        <img className={styles.image2} src={image2} alt="image2" />
        <div className={styles.freeConsultationDiv}>
          <p style={{
            fontWeight: "700",
            fontSize: "16px",
            color : "#1B3C74"
          }}>
            <span
              style={{
                backgroundColor: "#2AA8FF",
                borderRadius: "5px",
                padding: "0.2rem",
                marginRight : "0.3rem",
                color: "white", 
              }}
            >
              <FaPhoneVolume />
            </span>
            Free Consultation
          </p>
          <p style={{
            fontWeight: "500",
            fontSize: "15px",
            color: "#77829D"
          }}>Consultation with the best</p>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <p className={styles.heading}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </p>
        <h2>
          Patient <span>Caring</span>
        </h2>
        <p className={styles.para}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <ul>
          <li>
            {" "}
            <HiBadgeCheck color="#2AA8FF" /> Stay Updated About Your Health
          </li>
          <li>
            {" "}
            <HiBadgeCheck color="#2AA8FF" /> Check Your Results Online
          </li>
          <li>
            {" "}
            <HiBadgeCheck color="#2AA8FF" /> Manage Your Appointments
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PatientCaring;
