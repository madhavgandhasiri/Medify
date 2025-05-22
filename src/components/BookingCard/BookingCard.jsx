import React from "react";
import { BiSolidLike } from "react-icons/bi";
import styles from "./BookingCard.module.css";
import centerImg from "../../assets/center.png";
import TimeBox from "../TimeBox/TimeBox";

function BookingCard({ bookings }) {
  if (!bookings || bookings.length === 0) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        No bookings found.
      </h3>
    );
  }

  return (
    <>
      {bookings.map((booking, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.bookingCardContainer}>
            <div className={styles.imgDiv}>
              <img
                className={styles.hospitalIcon}
                src={centerImg}
                alt="center"
              />
            </div>
            <div className={styles.infoDiv}>
              <h3 className={styles.hospitalName}>
                {booking["Hospital Name"]}
              </h3>
              <span className={styles.cityName}>
                {booking.City}, {booking.State}
              </span>
              <span className={styles.desc}>{booking.hospitalType}</span>
              <br />
              <span className={styles.like}>
                <BiSolidLike /> {booking["Hospital overall rating"]}
              </span>
            </div>
            <div className={styles.bookingDiv}>
              <TimeBox time={booking.bookingTime} />
              <div className={styles.dateBox}>
                <p>{booking.bookingDate}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BookingCard;
