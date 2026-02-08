"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiOutlineSearch,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
// import { ConstellationBackground } from "./ConstellationBackground"; // Path check koren

const services = [
  {
    title: "Executive Search",
    desc: "From executive search to team building, we provide end-to-end recruitment services tailored for the tech frontier.",
    icon: <HiOutlineSearch />,
    accent: "from-[#2F8BDD] to-[#6FDEF7]",
  },
  {
    title: "Technical Recruitment",
    desc: "Specialized hiring for developers, engineers, and technical talent in AI, blockchain, and Web3.",
    icon: <HiOutlineUserGroup />,
    accent: "from-[#6FDEF7] to-[#2F8BDD]",
  },
  {
    title: "Talent Advisory",
    desc: "Strategic consulting on talent acquisition, market insights, and workforce planning.",
    icon: <HiOutlineLightBulb />,
    accent: "from-[#2F8BDD] via-[#6FDEF7] to-indigo-500",
  },
];

const HomeTalentSolution = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full py-24 px-6 md:px-16 overflow-hidden bg-neutral-950">
      {/* --- CONSTELLATION BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={80}
          nodeColor="rgba(111, 222, 247, 0.4)"
          lineColor="rgba(47, 139, 221, 0.15)"
        />
      </div>

      {/* --- BG DECORATION GLOW --- */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#2F8BDD]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-10">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8"
          >
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] text-[#6FDEF7] uppercase">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            Comprehensive Talent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] via-[#6FDEF7] to-indigo-400">
              Solutions
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed border-t border-white/5 pt-8">
            From executive search to team building, we provide end-to-end
            recruitment services tailored for the tech frontier.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15 }}
              data-aos={index === 1 ? "fade-down" : "fade-up"}
              data-aos-delay={(index + 1) * 100}
              className={`relative group p-10 rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden ${
                index === 1 ? "md:translate-y-12" : ""
              }`}
            >
              {/* Subtle Card Glow on Hover */}
              <div
                className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700`}
              />

              {/* Icon Container */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.accent} text-white rounded-2xl flex items-center justify-center text-3xl mb-10 shadow-2xl group-hover:rotate-6 transition-all duration-500 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#6FDEF7] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-10 font-medium">
                {service.desc}
              </p>

              {/* Animated Progress/Underline */}
              <div className="h-1 w-16 bg-white/5 rounded-full overflow-hidden group-hover:w-full transition-all duration-700">
                <div
                  className={`h-full bg-gradient-to-r ${service.accent} w-full`}
                />
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-[#6FDEF7]/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTalentSolution;
