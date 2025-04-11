import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection"
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./Home.module.css"


function Home(){
  return (
    <div className={styles.HomeContainer}>
      <HeaderSection />
      <HeroSection />
    </div>
  )
}

export default Home;