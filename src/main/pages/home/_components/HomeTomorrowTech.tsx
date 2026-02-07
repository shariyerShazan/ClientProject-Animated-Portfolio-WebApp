import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineCubeTransparent,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

const BRAND = "#2F8BDD";

const industries = [
  {
    title: "AI & Machine Learning",
    desc: "From startups to enterprise, we recruit AI engineers, ML researchers, and data scientists.",
    icon: <HiOutlineCpuChip />,
    delay: 0.2,
    // Prothom card-ta ektu bame thakbe
    position: "md:-translate-x-12 md:-translate-y-9",
  },
  {
    title: "Blockchain",
    desc: "Smart contract developers, protocol engineers, and blockchain architects for leading projects.",
    icon: <HiOutlineCubeTransparent />,
    delay: 0.4,
    // Dwitiyo card-ta ektu dane ebong upore thakbe
    position: "md:translate-x-4 md:-translate-y-8",
  },
  {
    title: "DeFi & Crypto",
    desc: "Specialists in decentralized finance, tokenomics, and cryptocurrency infrastructure.",
    icon: <HiOutlineCurrencyDollar />,
    delay: 0.6,
    // Tritiyo card-ta niche ebong majhkhaner dike thakbe
    position: "md:-translate-x-8 md:translate-y-4",
  },
];

const HomeTomorrowTech = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Protibar scroll korle animation hobe
      mirror: true, // Scroll up korle abar animation hobe
      easing: "ease-out-cubic",
    });

    // Content load hobar por AOS refresh kora safe
    AOS.refresh();
  }, []);
  return (
    <section className="relative py-32 px-6 md:px-16 bg-[#F8FAFC] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span
              data-aos="fade-right"
              className="text-sm font-bold tracking-widest uppercase text-slate-500"
            >
              Industries We Serve
            </span>
          </div>

          <h2
            data-aos="fade-left"
            className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Specialized in <br />
            <span className="text-[#2F8BDD]">Tomorrow's</span> <br />
            Technologies
          </h2>

          <p
            data-aos="fade-right"
            className="text-slate-600 text-lg leading-relaxed max-w-lg mb-12"
          >
            We understand the unique challenges of hiring in emerging technology
            sectors. Our deep industry knowledge ensures we find candidates who
            don't just have the skills—they share the vision.
          </p>

          <motion.button
            data-aos="fade-left"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl border-2 border-[#2F8BDD] text-[#2F8BDD] font-bold text-lg hover:bg-[#2F8BDD] hover:text-white transition-all duration-300 shadow-lg shadow-blue-100"
          >
            Explore all Industries
          </motion.button>
        </div>

        {/* RIGHT CONTENT - Optimized Staggered Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              data-aos={`${index == 1 ? "fade-left" : "fade-right"}`}
              data-aos-delay={(index + 1) * 100}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              // Ekhane position class gulo card-ke move korbe kintu overlap korbe na
              className={`bg-white rounded-xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden group ${item.position} ${index === 2 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
            >
              {/* Decorative Mesh */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[radial-gradient(#2F8BDD10_1px,transparent_1px)] [background-size:10px_10px] opacity-40 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div
                className="w-14 h-14 mb-6 rounded-2xl flex items-center justify-center text-2xl shadow-sm transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: `${BRAND}15`, color: BRAND }}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-slate-800 mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Decorative Circle in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[30px] border-blue-50/40 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HomeTomorrowTech;
