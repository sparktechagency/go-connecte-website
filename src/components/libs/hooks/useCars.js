"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await axios.get("/data/carData.json");
        setCars(data);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError(err.message ?? "Failed to load cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
};
