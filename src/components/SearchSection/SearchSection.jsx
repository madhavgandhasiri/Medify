import React, { useState, useEffect } from "react";
import styles from "./SearchSection.module.css";
import Button from "../Button/Button";
import { IoMdSearch } from "react-icons/io";
import SearchCard from "../SearchCard/SearchCard";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function SearchSection({
  setMedicalCenters,
  setSelectedCity,
  selectedCity,
  hasSearched,
  setHasSearched,
  selectedCard,
  setSelectedCard,
}) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [fromCardSelection, setFromCardSelection] = useState(false);

  useEffect(() => {
    if (location.state?.fromCardSelection) {
      setFromCardSelection(true);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(res.data);
      } catch (err) {
        console.error("Error fetching states", err);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      // if (!selectedState) {
      //   setCities([]);
      //   return;
      // }
      try {
        const res = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        setCities(res.data);
      } catch (err) {
        console.error("Error fetching cities", err);
      }
    };

    fetchCities();
  }, [selectedState]);

  const handleSearch = async () => {
    if (!selectedState || !selectedCity) {
      alert("Please select both state and city");
      return;
    }
    const url = `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`;
    try {
      setHasSearched(true);
      const res = await axios.get(url);
      setMedicalCenters(res.data);
    } catch (err) {
      console.error("Search API failed:", err);
      alert("Something went wrong");
    }
  };

  function handleCardSelect() {
    navigate("/details", { state: { fromCardSelection: true } });
  }

  return (
    <div
      className={`${styles.SearchContainer} ${
        hasSearched ? styles.SearchContainerCardSelected : ""
      }`}
    >
      <div className={styles.SearchContainerUpperDiv}>
        <div id="state" className={styles.inputState}>
          <select
            className={styles.inputBox}
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div id="city" className={styles.inputCity}>
          <IoMdSearch className={styles.searchIconForCity} />
          <select
            className={styles.inputBox}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            // disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <Button 
          text="Search" 
          width="7.5rem" 
          onClick={handleSearch}
          type="submit" 
          id="searchBtn"
          >
          </Button>
        </div>
      </div>
      {!fromCardSelection && !hasSearched && (
        <div className={styles.SearchContainerLowerDiv}>
          <p>You may be looking for</p>
          <div className={styles.searchCardDiv}>
            {["Doctors", "Labs", "Hospitals", "Medical Store", "Ambulance"].map(
              (entity, index) => (
                <SearchCard
                  key={index}
                  text={entity}
                  onSelect={handleCardSelect}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
