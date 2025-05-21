import React from "react";
import styles from "./SpecializationCard.module.css"

function SpecializationCard({specialization, img}){
  return (
    <div className={styles.specializationCardDiv}>
      <img src={img} alt={specialization} />
      <p>{specialization}</p>
    </div>
  )
}

export default SpecializationCard;