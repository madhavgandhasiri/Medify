import React, { useState } from "react";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "./Home.module.css";
import SearchSection from "../components/SearchSection/SearchSection";
import Discounts from "../components/Discounts/Discounts";
import Specialization from "../components/SpecializationSection/Specialization";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import Blogs from "../components/Blogs/Blogs";
import FamilySection from "../components/FamilySection/FamilySection";
import Faqs from "../components/Faqs/Faqs";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";

function Home() {
const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className={styles.HomeContainer}>
      <HeaderSection />
      <HeroSection />
      <SearchSection selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
      <Discounts />
      <Specialization />
      <Specialist />
      <PatientCaring />
      <Blogs />
      <FamilySection />
      <Faqs />
      <DownloadApp />
      <Footer />
    </div>
  );
}
export default Home;
