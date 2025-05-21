import React from "react";
import Doctors from "../../assets/SearchCard/Doctor.png";
import Labs from "../../assets/SearchCard/Drugstore.png";
import Hospitals from "../../assets/SearchCard/Hospital.png";
import MedicalStore from "../../assets/SearchCard/Capsule.png";
import Ambulance from "../../assets/SearchCard/Ambulance.png";
import styles from "./SearchCard.module.css";

const entityImages = {
  Doctors: Doctors,
  Labs: Labs,
  Hospitals: Hospitals,
  "Medical Store": MedicalStore,
  Ambulance: Ambulance,
};

function SearchCard({ text, isSelected, onSelect }) {
  const image = entityImages[text];

  return (
    <div
      className={`${styles.searchCardContainer} ${
        isSelected ? styles.active : ""
      }`}
      onClick={onSelect}
    >
      <img src={image} alt="doctor" />
      <p>{text}</p>
    </div>
  );
}

export default SearchCard;
