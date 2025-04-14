import React from "react";
import styles from "./SearchSection.module.css";
import Button from "../Button/Button";
import { IoMdSearch } from "react-icons/io";
import SearchCard from "../SearchCard/SearchCard";

function SearchSection() {
  return (
    <div className={styles.SearchContainer}>
      <div className={styles.SearchContainerUpperDiv}>
        <div className={styles.inputState}>
          <IoMdSearch className={styles.searchIcon} />
          <input type="text" placeholder="State" className={styles.inputBox}/>
        </div>
        <div className={styles.inputCity}>
          <IoMdSearch className={styles.searchIconForCity} />
          <input type="text" placeholder="City" className={styles.inputBox}/>
          <Button text="Search" width="7.5rem"></Button>
        </div>
      </div>
      <div className={styles.SearchContainerLowerDiv}>
        <p>You may be looking for</p>
        <div className={styles.searchCardDiv}>
        {["Doctors", "Labs", "Hospitals", "Medical Store", "Ambulance"].map((entity) => (
          <SearchCard text = {entity}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
