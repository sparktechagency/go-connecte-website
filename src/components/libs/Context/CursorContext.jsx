"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [borderColor, setBorderColor] = useState("white");

  return (
    <CursorContext.Provider value={{ borderColor, setBorderColor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    toast.error("useCursor must be used within CursorProvider");
  }
  return context;
}
