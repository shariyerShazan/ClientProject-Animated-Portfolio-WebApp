"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import aiPerson from "@/assets/main/ai.png";

const AboutTechTalent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const moveX = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);
  const cardMoveX = useTransform(mouseX, [-0.5, 0.5], ["30px", "-30px"]);

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
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              About Aventra3
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            Shaping the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7]">
              Tech Talent
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl">
            We believe the most transformative technologies deserve exceptional
            people. Our mission is to connect visionary organizations with the
            talent that will define the next generation of innovation.
          </p>

          <div className="space-y-6 mb-12 border-l-2 border-[#2F8BDD] pl-6">
            <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              The future of work is being written by those building AI systems,
              decentralized platforms, and blockchain infrastructure.
            </p>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              Aventra3 exists to be the bridge—connecting human potential with
              technological possibility.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(47, 139, 221, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] text-white font-bold rounded-xl flex items-center gap-3 transition-all"
          >
            Partner With Us <span>→</span>
          </motion.button>
        </motion.div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center h-[600px]">
          <motion.div
            style={{ x: moveX, y: moveY }}
            className="relative z-10 w-[85%] transition-opacity duration-500"
          >
            <img
              src={aiPerson}
              alt="AI Human"
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(47,139,221,0.2)]"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div
            style={{ x: cardMoveX, y: moveY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-1/4 -left-4 z-20 bg-neutral-900/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl min-w-[200px]"
          >
            <h4 className="text-3xl font-black text-[#6FDEF7]">50+</h4>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-tighter">
              Partner Companies
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{ x: moveX, y: cardMoveX }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-10 right-4 z-20 bg-neutral-900/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl min-w-[200px]"
          >
            <h4 className="text-3xl font-black text-[#6FDEF7]">5+</h4>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-tighter">
              Years of Excellence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTechTalent;
