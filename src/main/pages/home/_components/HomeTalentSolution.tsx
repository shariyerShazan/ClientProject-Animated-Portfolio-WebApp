/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiOutlineSearch,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/Particles ";
// import Particles from "@/components/ui/particles";

const services = [
  {
    title: "Executive Search",
    desc: "From executive search to team building, we provide end-to-end recruitment services tailored for the tech frontier.",
    icon: <HiOutlineSearch />,
    delay: "200",
    accent: "from-blue-600 to-blue-400",
  },
  {
    title: "Technical Recruitment",
    desc: "Specialized hiring for developers, engineers, and technical talent in AI, blockchain, and Web3.",
    icon: <HiOutlineUserGroup />,
    delay: "400",
    accent: "from-cyan-500 to-blue-400",
  },
  {
    title: "Talent Advisory",
    desc: "Strategic consulting on talent acquisition, market insights, and workforce planning.",
    icon: <HiOutlineLightBulb />,
    delay: "600",
    accent: "from-sky-500 to-indigo-400",
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
      {/* 🔵 PARTICLES BACKGROUND (section only) */}
      <div className="absolute inset-0 z-0">
        {" "}
        <Particles
          quantity={1000}
          color="#2F8BDD"
          // Staticity 1500 theke komiye 80-100 er moddhe rakhun.
          // Eta particles gulo-ke mouse theke "dhire susthe" dure sorbe, jhatka dibe na.
          staticity={100}
          // Ease 25 theke baraye 40-50 kora holo.
          // Ease joto baraben, nora-chora toto "fluid" ba smooth hobe.
          ease={50}
          size={0.6}
          className="absolute inset-0 z-0 bg-transparent"
          // Constant drift (Dhire dhire niche bheshe jaoar jonno)
          vx={0.2}
          vy={0.4}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-10">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-[11px] font-bold tracking-[0.4em] text-white/80 uppercase">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Comprehensive Talent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Solutions
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            From executive search to team building, we provide end-to-end
            recruitment services tailored for the tech frontier.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15, scale: 1.02 }}
              data-aos={`${index == 1 ? "fade-down" : "fade-up"}`}
              data-aos-delay={(index + 1) * 100}
              className={`relative group p-10 rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl transition-all duration-500 overflow-hidden ${
                index === 1 ? "md:translate-y-12" : ""
              }`}
            >
              {/* Glow */}
              <div
                className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-20 blur-[100px] transition-opacity duration-700`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.accent} text-white rounded-[1.25rem] flex items-center justify-center text-3xl mb-10 shadow-2xl group-hover:rotate-12 transition-all duration-500`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-10 font-medium">
                {service.desc}
              </p>

              <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden group-hover:w-full transition-all duration-700">
                <div
                  className={`h-full bg-gradient-to-r ${service.accent} w-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTalentSolution;
