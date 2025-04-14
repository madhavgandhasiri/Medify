import React from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection"
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./Home.module.css"
import SearchSection from "../components/SearchSection/SearchSection";


function Home(){
  return (
    <div className={styles.HomeContainer}>
      <HeaderSection />
      <HeroSection />
      <SearchSection />
    </div>
  )
}

export default Home;