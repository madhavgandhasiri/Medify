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
import HospitalDetails from "../components/HospitalDetails/HospitalDetails";
import LimitedOffer from "../components/LimitedOffer/LimitedOffer";

function Home() {
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [hasSearched, setHasSearched] = useState(false);


   if (medicalCenters.length > 0) {
    return (
      <div className={styles.HomeContainer}>
        <HeaderSection />
        <SearchSection
          setMedicalCenters={setMedicalCenters}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          medicalCenters={medicalCenters}
          hasSearched={hasSearched}
          setHasSearched={setHasSearched}
        />
              {medicalCenters.length > 0 && (
        <>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsUpperDiv}>
              <h1 className={styles.centersAvailableTitle}>
                {medicalCenters.length} medical centers available in {selectedCity}
              </h1>
              <p className={styles.bookAppointmentTitle}>
                Book appointments with minimum wait-time & verified doctor details
              </p>
            </div>
            <div className={styles.detailsLowerDiv}>
              <div className={styles.HospitalDetailsCardDiv}>
                {medicalCenters.map((center, index) => (
                  <HospitalDetails key={index} center={center} />
                ))}
              </div>
              <LimitedOffer />
            </div>
          </div>
        </>
      )}
        <Faqs />
        <DownloadApp />
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.HomeContainer}>
      <HeaderSection />
      <HeroSection />
      <SearchSection
        setMedicalCenters={setMedicalCenters}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
        medicalCenters={medicalCenters}
        hasSearched={hasSearched}
        setHasSearched={setHasSearched}
      />
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
