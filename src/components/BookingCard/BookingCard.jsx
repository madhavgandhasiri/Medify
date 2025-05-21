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
              <span className={styles.hospitalName}>
                {booking.hospitalName}
              </span>
              <span className={styles.cityName}>
                {booking.city}, {booking.state}
              </span>
              <span className={styles.desc}>{booking.hospitalType}</span>
              <br />
              <span className={styles.like}>
                <BiSolidLike /> 5
              </span>
            </div>
            <div className={styles.bookingDiv}>
              <TimeBox time={booking.time} />
              <div className={styles.dateBox}>
                <p>{booking.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BookingCard;
