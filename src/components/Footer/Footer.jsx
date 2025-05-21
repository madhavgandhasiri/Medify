import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.upperDiv}>
        <div className={styles.socialDiv}>
          <div className={styles.logoDiv}>
            <img src={logo} alt="logo" />
            <h5>Medify</h5>
          </div>
          <div className={styles.iconDiv}>
            <FaFacebook color="white" size={25}/>
            <AiFillTwitterCircle color="white" size={25}/>
            <IoLogoYoutube color="white" size={25}/>
            <FaPinterest color="white" size={25}/>
          </div>
        </div>

        <div className={styles.list}>
          <ul>
            <li>About Us</li>
            <li>Our Pricing</li>
            <li>Our Gallery</li>
            <li>Appointment</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.list}>
          <ul>
            <li>Orthology</li>
            <li>Neurology</li>
            <li>Dental Care</li>
            <li>Opthalmology</li>
            <li>Cardiology</li>
          </ul>
        </div>
        <div className={styles.list}>
          <ul>
            <li>About Us</li>
            <li>Our Pricing</li>
            <li>Our Gallery</li>
            <li>Appointment</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className={styles.borderLine}></div>
      <div className={styles.lowerDiv}>
        <p style={{
          color: "white"
        }}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
