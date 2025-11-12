"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export const useBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get("/data/bookingData.json");
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError(err.message ?? "Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return { bookings, loading, error };
};
