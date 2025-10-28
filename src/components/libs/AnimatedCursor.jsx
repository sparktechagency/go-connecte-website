"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor({ borderColor = "white" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      //   if (!isVisible) setIsVisible(true);
    };

    // const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    // document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      // document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  //   if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 z-9999 pointer-events-none mix-blend-difference"
      style={{
        borderColor: borderColor,
      }}
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
}
