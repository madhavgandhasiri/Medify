import React from "react";
import Doctors from "../../assets/Doctor.png"
import Labs from "../../assets/Drugstore.png"
import Hospitals from "../../assets/Hospital.png"
import MedicalStore from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";
import styles from "./SearchCard.module.css"

const entityImages = {
  Doctors: Doctors,
  Labs: Labs,
  Hospitals: Hospitals,
  "Medical Store": MedicalStore,
  Ambulance: Ambulance,
}


function SearchCard({text}){
  const image = entityImages[text];

  return (
    <div className={styles.searchCardContainer}>
      <img src={image} alt="doctor" />
      <p>{text}</p>
    </div>
  )
}

export default SearchCard;