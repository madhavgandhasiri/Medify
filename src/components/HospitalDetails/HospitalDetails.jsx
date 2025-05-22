import React, { useState, useMemo } from "react";
import styles from "./HospitalDetails.module.css";
import centerImg from "../../assets/center.png";
import { BiSolidLike } from "react-icons/bi";
import Button from "../Button/Button";
import TimeBox from "../TimeBox/TimeBox";

function HospitalDetails({ center }) {
  const [onSelect, setOnSelect] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  const dateOptions = useMemo(() => generateDateOptions(3), []);

  function generateDateOptions(days = 3) {
    const options = [];

    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      let label;
      if (i === 0) {
        label = "Today";
      } else if (i === 1) {
        label = "Tomorrow";
      } else {
        const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
        const day = date.getDate();
        const month = date.toLocaleDateString("en-US", { month: "short" });
        label = `${weekday}, ${day} ${month}`;
      }

      options.push({
        label,
        slots: {
          Morning: ["09:00 AM", "10:00 AM", "11:30 AM"],
          Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
          Evening: ["04:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"]
        }
      });
    }

    return options;
  }

  function handleBookingCenter() {
    setOnSelect(!onSelect);
      if (!onSelect) {
    setSelectedDateIndex(0);
  }
  }

  function handleTimeSelection(time) {
    const selectedDate = dateOptions[selectedDateIndex];
    const bookingDetails = {
      hospitalName: center["Hospital Name"],
      city: center.City,
      state: center.State,
      hospitalType: center["Hospital Type"],
      date: selectedDate.label,
      time: time
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    // alert(`Booked ${bookingDetails.hospitalName} on ${bookingDetails.date} at ${bookingDetails.time}`);
  }

  function isPastTime(slotTime, label) {
    if (label !== "Today") return false;

    const [time, modifier] = slotTime.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const now = new Date();
    const slotDate = new Date();
    slotDate.setHours(hours, minutes, 0);

    return slotDate < now;
  }

  function getAvailableSlotCount(date, label) {
    let count = 0;
    for (const period in date.slots) {
      for (const time of date.slots[period]) {
        if (!isPastTime(time, label)) count++;
      }
    }
    return count;
  }

  return (
    <div className={styles.container}>
      <div className={styles.upperDiv}>
        <div className={styles.imgDiv}>
          <img className={styles.hospitalIcon} src={centerImg} alt="center" />
        </div>
        <div className={styles.infoDiv}>
          <h3 className={styles.hospitalName}>{center["Hospital Name"]}</h3>
          <span className={styles.cityName}>
            {center.City}, {center.State}
          </span>
          <span className={styles.desc}>{center["Hospital Type"]}</span>
          <span className={styles.fee}>
            <span className={styles.free}>FREE</span> <del>₹500</del>{" "}
            Consultation fee at clinic
          </span>
          <span className={styles.like}>
            <BiSolidLike />5
          </span>
        </div>
        <div className={styles.bookingDiv}>
          <p className={styles.avaliable}>Available Today</p>
          <Button
            text="Book FREE Center Visit"
            width="12rem"
            onClick={handleBookingCenter}
          />
        </div>
      </div>

      {onSelect && (
        <div className={styles.lowerDiv}>
          <div className={styles.datesDiv}>
            <button className={styles.arrowButton}>{"<"}</button>
            {dateOptions.map((date, index) => (
              <div
                key={index}
                className={`${styles.selectDateDiv} ${selectedDateIndex === index ? styles.active : ""}`}
                onClick={() => setSelectedDateIndex(index)}
              >
                <p>{date.label}</p>
                <p style={{ color: "#01A400" }}>
                  {getAvailableSlotCount(date, date.label)} Slots Available
                </p>
              </div>
            ))}
            <button className={styles.arrowButton}>{">"}</button>
          </div>

          {selectedDateIndex !== null && (
            <>
              {["Morning", "Afternoon", "Evening"].map((period) => (
                <div key={period} className={styles[`${period}Div`]}>
                  <p style={{ minWidth: "5rem", textTransform: "capitalize" }}>{period}</p>
                  {dateOptions[selectedDateIndex].slots[period].map((time, i) => {
                    const isDisabled = isPastTime(time, dateOptions[selectedDateIndex].label);
                    return (
                      <div
                        key={i}
                        onClick={() => !isDisabled && handleTimeSelection(time)}
                        style={{
                          opacity: isDisabled ? 0.5 : 1,
                          pointerEvents: isDisabled ? "none" : "auto"
                        }}
                      >
                        <TimeBox time={time} />
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default HospitalDetails;
