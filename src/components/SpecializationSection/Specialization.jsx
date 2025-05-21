import React from "react";
import styles from "./Specialization.module.css";
import Button from "../Button/Button";
import SpecializationCard from "../SpecializationCard/SpecializationCard";

// Import images
import DentistryImg from "../../assets/Specialization/Drugstore.png";
import PrimaryCareImg from "../../assets/Specialization/Stethoscope.png";
import CardiologyImg from "../../assets/Specialization/y.png";
import MRIImg from "../../assets/Specialization/Heart Rate Monitor.png";
import BloodTestImg from "../../assets/Specialization/Blood Sample.png";
import PiscologistImg from "../../assets/Specialization/Immune.png";
import LaboratoryImg from "../../assets/Specialization/Drugstore.png";
import XRayImg from "../../assets/Specialization/X-Ray.png";

function Specialization() {
  const specialisations = [
    { name: "Dentistry", img: DentistryImg },
    { name: "Primary Care", img: PrimaryCareImg },
    { name: "Cardiology", img: CardiologyImg },
    { name: "MRI Resonance", img: MRIImg },
    { name: "Blood Test", img: BloodTestImg },
    { name: "Piscologist", img: PiscologistImg },
    { name: "Laboratory", img: LaboratoryImg },
    { name: "X-Ray", img: XRayImg }
  ];

  return (
    <div className={styles.SpecializationContainer}>
      <h1>Find By Specialisation</h1>
      <div className={styles.cardDiv}>
      {specialisations.map((spec, index) => (
        <SpecializationCard
          key={index}
          specialization={spec.name}
          img={spec.img}
        />
      ))}
      </div>
      <Button text="View All" width="8rem" />
    </div>
  );
}

export default Specialization;
