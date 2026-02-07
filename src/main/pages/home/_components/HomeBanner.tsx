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
import PlexusBackground from "./PlexusBackground";

const HomeBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    //   easing: "ease-out-expo",
    });
  }, []);

const targetRef = useRef<HTMLDivElement>(null);

// Scroll tracking logic for the banner section
const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start end", "end start"],
});

// Scroll er upor base kore properties transform kora
// Scroll barle opacity 0 theke 1 hobe, r y-axis e upore theke niche asbe
const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
const y = useTransform(scrollYProgress, [0, 0.2, 0.3], [-50, 0, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as any;

  return (
    <section className="relative hero-bg min-h-screen flex items-center pt-20 pb-20 px-6 md:px-16 overflow-hidden bg-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
        <PlexusBackground />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10 w-full">
        {/* Left Content: Side Aligned */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left" // Forced left alignment
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-cyan-50/50 mb-8"
          >
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-800 uppercase">
              Talent for the Future of Technology
            </p>
          </motion.div>

          <motion.h1
            style={{ opacity, y }} // Scroll-er value ekhane apply kora hoyeche
            className="text-3xl md:text-4xl lg:text-[65px] font-black text-[#001D3D] leading-[0.95] mb-8 tracking-tighter"
          >
            Recruiting Elite Talent <br />
            for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] via-[#46B3E6] to-[#6FDEF7]">
              AI, Blockchain & Crypto
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium border-l-2 border-[#6FDEF7] pl-6"
          >
            We connect visionary companies with exceptional professionals who
            are shaping the future of decentralized technology and artificial
            intelligence.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#001D3D] text-white px-12 py-4 rounded-lg font-bold text-lg shadow-xl shadow-blue-900/10 hover:bg-cyan-600 transition-all duration-300"
            >
              Find Talent
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-slate-300 text-[#001D3D] px-12 py-4 rounded-lg font-bold text-lg hover:border-cyan-400 transition-all flex items-center gap-2"
            >
              Explore{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content: Clean & Structured Cards */}
        <div className="relative h-[500px] hidden lg:block">
          {/* Card 1 */}
          <motion.div
            data-aos="fade-left"
            data-aos-delay="200"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex items-center gap-5 border border-slate-100 group"
          >
            <div className="p-3 bg-blue-50 text-[#2F8BDD] rounded-lg text-3xl group-hover:scale-110 transition-transform">
              <HiOutlineSearch />
            </div>
            <div className="pr-4">
              <h3 className="text-2xl font-black text-[#001D3D]">500+</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Placements
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            data-aos="fade-left"
            data-aos-delay="400"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/3 left-10 bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex items-center gap-5 border border-slate-100 group"
          >
            <div className="p-3 bg-cyan-50 text-[#6FDEF7] rounded-lg text-3xl group-hover:scale-110 transition-transform">
              <HiOutlineUsers />
            </div>
            <div className="pr-4">
              <h3 className="text-2xl font-black text-[#001D3D]">98%</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Retention
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            data-aos="fade-left"
            data-aos-delay="600"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-10 right-10 bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex items-center gap-5 border border-slate-100 group"
          >
            <div className="p-3 bg-indigo-50 text-indigo-500 rounded-lg text-3xl group-hover:scale-110 transition-transform">
              <HiOutlineOfficeBuilding />
            </div>
            <div className="pr-4">
              <h3 className="text-2xl font-black text-[#001D3D]">50+</h3>
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
