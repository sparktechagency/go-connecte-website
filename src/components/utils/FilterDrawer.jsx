// components/FilterDrawer.jsx
"use client";

import {
  Drawer,
  Button,
  Slider,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

export default function FilterDrawer({ open, onClose }) {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [carType, setCarType] = useState("all");
  const [transmission, setTransmission] = useState("all");
  const [features, setFeatures] = useState({
    ac: false,
    gps: false,
    bluetooth: false,
  });

  const handleReset = () => {
    setPriceRange([0, 100000]);
    setCarType("all");
    setTransmission("all");
    setFeatures({ ac: false, gps: false, bluetooth: false });
  };

  const handleApply = () => {
    console.log("Filters:", { priceRange, carType, transmission, features });
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "90%", sm: "420px" },
          p: 2,
        },
      }}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MdFilterList sx={{ color: "#14b8a6" }} />
            Filters
          </h2>
          <IconButton onClick={onClose}>
            <FaClosedCaptioning />
          </IconButton>
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="font-semibold mb-3">Price per day (CFA)</p>
          <Slider
            value={priceRange}
            onChange={(e, v) => setPriceRange(v)}
            valueLabelDisplay="auto"
            min={0}
            max={100000}
            step={5000}
            sx={{ color: "#14b8a6" }}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{priceRange[0].toLocaleString()}</span>
            <span>{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        {/* Car Type */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Car Type</h3>
          <RadioGroup
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
          >
            {["all", "sedan", "suv", "hatchback", "luxury"].map((t) => (
              <FormControlLabel
                key={t}
                value={t}
                control={
                  <Radio
                    sx={{
                      color: "#14b8a6",
                      "&.Mui-checked": { color: "#14b8a6" },
                    }}
                  />
                }
                label={t.charAt(0).toUpperCase() + t.slice(1)}
              />
            ))}
          </RadioGroup>
        </div>

        {/* Transmission */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Transmission</h3>
          <RadioGroup
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            {["all", "automatic", "manual"].map((t) => (
              <FormControlLabel
                key={t}
                value={t}
                control={
                  <Radio
                    sx={{
                      color: "#14b8a6",
                      "&.Mui-checked": { color: "#14b8a6" },
                    }}
                  />
                }
                label={t.charAt(0).toUpperCase() + t.slice(1)}
              />
            ))}
          </RadioGroup>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Features</h3>
          {["AC", "GPS", "Bluetooth"].map((feat) => {
            const key = feat.toLowerCase();
            return (
              <FormControlLabel
                key={feat}
                control={
                  <Checkbox
                    checked={features[key]}
                    onChange={(e) =>
                      setFeatures({ ...features, [key]: e.target.checked })
                    }
                    sx={{
                      color: "#14b8a6",
                      "&.Mui-checked": { color: "#14b8a6" },
                    }}
                  />
                }
                label={feat}
              />
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outlined"
            fullWidth
            onClick={handleReset}
            sx={{
              borderColor: "#14b8a6",
              color: "#14b8a6",
              textTransform: "none",
            }}
          >
            Clear All
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleApply}
            sx={{
              backgroundColor: "#14b8a6",
              textTransform: "none",
              "&:hover": { backgroundColor: "#0d9488" },
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
