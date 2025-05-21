import React, { useEffect, useState } from "react";
import styles from "./Bookings.module.css";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import Footer from "../components/Footer/Footer";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import BookingCard from "../components/BookingCard/BookingCard";
import LimitedOffer from "../components/LimitedOffer/LimitedOffer";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div className={styles.BookingsContainer}>
      <HeaderSection />
      <h2>My Bookings</h2>

      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <div className={styles.BookingCardsContainer}>
          <BookingCard bookings={bookings} />
        </div>
        <LimitedOffer />
      </div>

      <div>
        <DownloadApp />
        <Footer />
      </div>
    </div>
  );
}

export default Bookings;
