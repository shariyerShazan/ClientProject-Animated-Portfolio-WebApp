/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth fluid trailing config
  const springConfig = { damping: 28, stiffness: 50, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Circle-er center kolar jonno dynamic offset
      const size = isHovered ? 60 : 20;
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY, isHovered]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovered ? 60 : 25,
          height: isHovered ? 60 : 25,
          borderColor: isHovered ? "#2F8BDD" : "#2F8BDD",
          borderWidth: isHovered ? "2px" : "2px",
        }}
        className="relative border rounded-full flex items-center justify-center transition-colors duration-300 ease-out"
      >
        {/* Glow effect - Sudhu border theke halka light ber hobe */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          className="absolute inset-0 rounded-full border border-cyan-400 blur-[4px]"
        />

        {/* Center Dot - Hover korle dot-ta vanish hoye jabe clean looker jonno */}
        {!isHovered && <div className="w-1 h-1 bg-[#6FDEF7] rounded-full" />}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
