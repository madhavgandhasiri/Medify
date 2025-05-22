// import React, { useState } from "react";
// import HeaderSection from "../components/HeaderSection/HeaderSection";
// import styles from "./Details.module.css";
// import SearchSection from "../components/SearchSection/SearchSection";
// import Faqs from "../components/Faqs/Faqs";
// import DownloadApp from "../components/DownloadApp/DownloadApp";
// import Footer from "../components/Footer/Footer";
// import HospitalDetails from "../components/HospitalDetails/HospitalDetails";
// import LimitedOffer from "../components/LimitedOffer/LimitedOffer";

// function Details() {
//   const [medicalCenters, setMedicalCenters] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");



//   return (
//     <div className={styles.detailsContainer}>
//       <HeaderSection />
//       <SearchSection
//         setMedicalCenters={setMedicalCenters}
//         setSelectedCity={setSelectedCity}
//         selectedCity={selectedCity}
//         medicalCenters={medicalCenters}
//       />
//       {medicalCenters.length > 0 && (
//         <>
//           <div className={styles.detailsContainer}>
//             <div className={styles.detailsUpperDiv}>
//               <h1 className={styles.centersAvailableTitle}>
//                 {medicalCenters.length} medical centers available in {selectedCity}
//               </h1>
//               <p className={styles.bookAppointmentTitle}>
//                 Book appointments with minimum wait-time & verified doctor details
//               </p>
//             </div>
//             <div className={styles.detailsLowerDiv}>
//               <div className={styles.HospitalDetailsCardDiv}>
//                 {medicalCenters.map((center, index) => (
//                   <HospitalDetails key={index} center={center} />
//                 ))}
//               </div>
//               <LimitedOffer />
//             </div>
//           </div>
//         </>
//       )}
//       <Faqs />
//       <DownloadApp />
//       <Footer />
//     </div>
//   );
// }

// export default Details;
