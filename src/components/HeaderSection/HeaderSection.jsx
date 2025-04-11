import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./HeaderSection.module.css"

function HeaderSection(){
  return (
    <div className={styles.headerContainer}>
        <p> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
        <Navbar />
    </div>
  )
}

export default HeaderSection;