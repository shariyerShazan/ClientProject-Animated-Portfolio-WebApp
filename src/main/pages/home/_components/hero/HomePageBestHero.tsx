"use client";

// import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlayCircle } from "react-icons/fi";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
import heroImage from "@/assets/main/brain.png"; // Ekta 3D Brain ba Abstract Sphere image rakhun

const HomePageBestHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 px-6 md:px-16 pt-20">
      {/* --- BACKGROUND CONSTELLATION --- */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ConstellationBackground
          count={80}
          nodeColor="rgba(111, 222, 247, 0.8)"
          lineColor="rgba(47, 139, 221, 0.2)"
          connectionDistance={150}
          mouseRadius={150}
        />
      </div>

      {/* --- AMBIENT GLOWS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2F8BDD]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6FDEF7]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-left">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 border-l-4 border-[#6FDEF7] bg-[#6FDEF7]/5 mb-8"
          >
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] text-white/80 uppercase">
              Next Gen Tech Talent
            </span>
          </motion.div>

          {/* Main Hero Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.85] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
            >
              BUILDING THE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] via-[#6FDEF7] to-white"
            >
              FUTURE OF TECH
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium"
          >
            Aventra3 connects visionary companies with top-tier AI, Web3, and
            Blockchain talent to bridge the gap between idea and execution.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="group relative px-8 py-4 bg-white text-black font-black rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Hire Top Talent{" "}
                <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>

            <button className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all">
              <FiPlayCircle className="text-2xl text-[#6FDEF7]" />
              How it works
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex gap-12 border-t border-white/5 pt-8"
          >
            <div>
              <h4 className="text-2xl font-black text-white">10k+</h4>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                Talent Vetted
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white">98%</h4>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                Success Rate
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE: 3D Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Hero Image with Floating Animation */}
          <motion.div
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[550px]"
          >
            <img
              src={ heroImage}
              alt="AI Technology"
              className="w-full h-auto drop-shadow-[0_0_80px_rgba(111,222,247,0.3)]"
            />
          </motion.div>

          {/* Background Rotating Ring Effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[110%] h-[110%] border border-[#6FDEF7]/10 rounded-full -z-10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[90%] h-[90%] border border-[#2F8BDD]/5 rounded-full -z-10"
          />
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </section>
  );
};

export default HomePageBestHero;
