import React from "react";
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();
  return(
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoDiv}>
        <img src={logo} alt={logo} />
        <Link to="/" className={styles.logoText}>Medify</Link>
      </div>
      <div className={styles.navbarLinksDiv}>
        <a href="/">Find Doctors</a>
        <a href="/">Hospitals</a>
        <a href="/">Medicines</a>
        <a href="/">Surgery</a>
        <a href="/">Software For Provider</a>
        <a href="/">Facilities</a>
        <Button text="My Bookings" width = "8rem" onClick={()=> navigate("/my-bookings")}/>
      </div>
    </div>
  )
}

export default Navbar;