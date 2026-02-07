/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiOutlineSearch,
  HiOutlineUsers,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
// import { ConstellationBackground } from "./ConstellationBackground"; // Ensure correct path

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.3], [-50, 0, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* --- CONSTELLATION BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={100}
          nodeColor="rgba(111, 222, 247, 1)" // Brand Color #6FDEF7
          lineColor="rgba(47, 139, 221, 0.2)" // Brand Color #2F8BDD (low opacity)
          connectionDistance={150}
          mouseRadius={150}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10 w-full px-6 md:px-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 uppercase">
              Talent for the Future of Technology
            </p>
          </div>

          <motion.h1
            style={{ opacity, y }}
            className="text-4xl md:text-5xl lg:text-[65px] font-black text-white leading-[0.95] mb-8 tracking-tighter"
          >
            Recruiting Elite Talent <br />
            for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] via-[#46B3E6] to-[#6FDEF7]">
              AI, Blockchain & Crypto
            </span>
          </motion.h1>

          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium border-l-2 border-[#6FDEF7]/30 pl-6">
            We connect visionary companies with exceptional professionals who
            are shaping the future of decentralized technology.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(47, 139, 221, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#2F8BDD] text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Find Talent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-slate-700 text-white px-12 py-4 rounded-lg font-bold text-lg hover:border-[#6FDEF7] transition-all flex items-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              Explore{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content: Glassmorphism Cards */}
        <div className="relative h-[500px] hidden lg:block">
          {/* Placements Card */}
          <motion.div
            data-aos="fade-left"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-5 group"
          >
            <div className="p-3 bg-[#2F8BDD]/20 text-[#2F8BDD] rounded-xl text-3xl group-hover:scale-110 transition-transform">
              <HiOutlineSearch />
            </div>
            <div className="pr-4">
              <h3 className="text-2xl font-black text-white">500+</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Placements
              </p>
            </div>
          </motion.div>

          {/* Retention Card */}
          <motion.div
            data-aos="fade-left"
            data-aos-delay="200"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 left-10 bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-5 group"
          >
            <div className="p-3 bg-[#6FDEF7]/20 text-[#6FDEF7] rounded-xl text-3xl group-hover:scale-110 transition-transform">
              <HiOutlineUsers />
            </div>
            <div className="pr-4">
              <h3 className="text-2xl font-black text-white">98%</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Retention
              </p>
            </div>
          </motion.div>

          {/* Partners Card */}
          <motion.div
            data-aos="fade-left"
            data-aos-delay="400"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-10 right-10 bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-5 group"
          >
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl text-3xl group-hover:scale-110 transition-transform">
              <HiOutlineOfficeBuilding />
            </div>
            <div className="pr-4">
              <h3 className="text-2xl font-black text-white">50+</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Partners
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
