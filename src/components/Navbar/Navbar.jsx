import React from "react";
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"
import Button from "../Button/Button";

function Navbar(){
  return(
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoDiv}>
        <img src={logo} alt={logo} />
        <p>Medify</p>
      </div>
      <div className={styles.navbarLinksDiv}>
        <a href="/">Find Doctors</a>
        <a href="/">Hospitals</a>
        <a href="/">Medicines</a>
        <a href="/">Surgery</a>
        <a href="/">Software For Provider</a>
        <a href="/">Facilities</a>
        <Button text="My Bookings" width = "8rem"/>
      </div>
    </div>
  )
}

export default Navbar;