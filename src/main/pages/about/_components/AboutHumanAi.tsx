"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import humanAiImg from "@/assets/main/ai2.jpg"; // Apnar image path check koren
import { FaPlay } from "react-icons/fa";

const AboutHumanAi = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse transformation logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const moveX = useTransform(mouseX, [-0.5, 0.5], ["-15px", "15px"]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], ["-15px", "15px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Video/Image Container */}
        <motion.div
          style={{ x: moveX, y: moveY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          {/* Main Image with rounded corners */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <img
              src={humanAiImg}
              alt="Human Intelligence"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white text-3xl md:text-4xl border border-white/40 shadow-2xl"
              >
                <div className="translate-x-1">
                  <FaPlay />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Glow behind image */}
          <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>

        {/* RIGHT SIDE: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8">
            <span className="flex h-2.5 w-2.5 ">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              Our Approach
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            Human Intelligence Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7]">
              Technical Expertise
            </span>
          </h2>

          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              We combine deep industry knowledge with genuine human connection.
              Our team speaks the language of AI researchers, blockchain
              developers, and Web3 pioneers—because many of us have been there
              ourselves.
            </p>

            <p className="text-slate-400 text-base leading-relaxed border-l-2 border-[#6FDEF7] pl-3">
              This isn't about algorithms matching keywords. It's about
              understanding the nuance of what makes a great fit—the unwritten
              requirements, the cultural dynamics, and the potential for growth
              that only experience can recognize.
            </p>
          </div>

          {/* Progress Bar or Subtle Detail */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] mt-10 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHumanAi;
