import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button";
import heroImage from "../../assets/heroImage.png";

function HeroSection() {
  return (
    <div className={styles.HeroSectionContainer}>
      <div className={styles.HeroSectionTextDiv}>
        <h4>Skip the travel! Find Online</h4>
        <h1>Medical <span>Centers</span></h1>
        <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <div className={styles.HeroSectionButton}>
           <Button text="Find Centers" width="10rem"></Button>
        </div>
      </div>
      <div className={styles.HeroSectionImageDiv}>
        <img src={heroImage} alt="hero-img" />
      </div>
    </div>
  );
}

export default HeroSection;
