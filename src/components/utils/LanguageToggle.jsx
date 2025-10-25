"use client";

import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function LanguageToggle() {
  const [language, setLanguage] = useState("en");

  const handleChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
      console.log("Language switched to:", newLanguage);
    }
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleChange}
      aria-label="Language toggle"
      sx={{
        borderRadius: "8px",
        border: "1px solid #00AEA8",
        padding: {
          xs: "4px",
          md: "6px",
        },
        "& .MuiToggleButton-root": {
          textTransform: "none",
          borderRadius: "5px",
          fontWeight: 500,
          color: "#000",
          height: {
            xs: 24,
            md: 30,
          },
          "&.Mui-selected": {
            backgroundColor: "#00AEA8",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#0d9488",
            },
          },
        },
      }}
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="fr" aria-label="French">
        FR
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
