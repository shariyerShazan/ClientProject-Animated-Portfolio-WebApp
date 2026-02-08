"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineCubeTransparent,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
// import { ConstellationBackground } from "./ConstellationBackground"; // Path thik thakle check koren

const BRAND_LIGHT = "#6FDEF7";
const BRAND_DEEP = "#2F8BDD";

const industries = [
  {
    title: "AI & Machine Learning",
    desc: "From startups to enterprise, we recruit AI engineers, ML researchers, and data scientists.",
    icon: <HiOutlineCpuChip />,
    position: "md:-translate-x-12 md:-translate-y-9",
    glow: "rgba(111, 222, 247, 0.2)",
  },
  {
    title: "Blockchain",
    desc: "Smart contract developers, protocol engineers, and blockchain architects for leading projects.",
    icon: <HiOutlineCubeTransparent />,
    position: "md:translate-x-4 md:-translate-y-8",
    glow: "rgba(47, 139, 221, 0.2)",
  },
  {
    title: "DeFi & Crypto",
    desc: "Specialists in decentralized finance, tokenomics, and cryptocurrency infrastructure.",
    icon: <HiOutlineCurrencyDollar />,
    position: "md:-translate-x-8 md:translate-y-4",
    glow: "rgba(111, 222, 247, 0.2)",
  },
];

const HomeTomorrowTech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-16 bg-neutral-950 overflow-hidden">
      {/* --- CONSTELLATION BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={60} // Content-er niche thakay ektu kom kora hoyeche jate distraction na hoy
          nodeColor="rgba(111, 222, 247, 0.6)"
          lineColor="rgba(111, 222, 247, 0.1)"
          connectionDistance={140}
        />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span
              data-aos="fade-right"
              className="text-sm font-bold tracking-widest uppercase text-slate-400"
            >
              Industries We Serve
            </span>
          </div>

          <h2
            data-aos="fade-up"
            className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight"
          >
            Specialized in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7]">
              Tomorrow's
            </span>{" "}
            <br />
            Technologies
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-slate-400 text-lg leading-relaxed max-w-lg mb-12 border-l-2 border-[#6FDEF7]/20 pl-6 backdrop-blur-[2px]"
          >
            We understand the unique challenges of hiring in emerging technology
            sectors. Our deep industry knowledge ensures we find candidates who
            don't just have the skills—they share the vision.
          </p>

          <motion.button
            data-aos="fade-up"
            whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${BRAND_DEEP}40` }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl border-2 border-[#2F8BDD] text-white font-bold text-lg hover:bg-[#2F8BDD] transition-all duration-300"
          >
            Explore all Industries
          </motion.button>
        </div>

        {/* RIGHT CONTENT - Glassmorphism Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={(index + 1) * 100}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(15, 23, 42, 0.6)",
                borderColor: "rgba(111, 222, 247, 0.3)",
              }}
              className={`bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/5 relative overflow-hidden group transition-all duration-500 ${item.position} ${index === 2 ? "md:col-span-2 md:w-4/5 md:mx-auto" : ""}`}
            >
              {/* Inner Glow on Hover */}
              <div
                className="absolute -inset-24 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: item.glow }}
              />

              {/* Icon Container */}
              <div
                className="w-14 h-14 mb-6 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6 duration-300 relative z-10"
                style={{
                  backgroundColor: `${BRAND_DEEP}20`,
                  color: BRAND_LIGHT,
                }}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-white mb-3 tracking-tight relative z-10">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed font-medium text-sm relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTomorrowTech;
