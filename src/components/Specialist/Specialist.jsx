import React from "react";
import styles from "./Specialist.module.css";
import orthodoc from "../../assets/Specialist/ortho.png";
import medicine from "../../assets/Specialist/medicine.png";
import neurologist from "../../assets/Specialist/neuro.png";
import general from "../../assets/Specialist/general.png";
import cardiologist from "../../assets/Specialist/cardiologist.png";

function Specialist() {
  const specialist = [
    { name: "Dr. Heena Sachdeva", img: orthodoc, specialization: "Orthopadics" },
    { name: "Dr. Ahmad Khan", img: neurologist, specialization: "Neurologist" },
    { name: "Dr. Ankur Sharma", img: medicine, specialization: "Medicine" },
    { name: "Dr. Venkatesh Iyer", img: general, specialization: "General" },
    { name: "Dr. Virat Kohli", img: cardiologist, specialization: "Cardiologist" }
  ];
  return (
    <div className={styles.SpecialistContainer}>
      <h1>Our Medical Specialist</h1>
      <div className={styles.SpecialistCardContainer}>
        {specialist.map((spec) => (
          <div className={styles.SpecialistCard} key={spec.name}>
            <img src={spec.img} alt={spec.specialization} />
            <h3>{spec.name}</h3>
            <p>{spec.specialization}</p>
          </div>
        ))}
      </div>
      <div className={styles.dotsDiv}>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
}

export default Specialist;
