"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
// import { ConstellationBackground } from "./ConstellationBackground"; // Path check koren

const HomeMeetExecution = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-neutral-950">
      {/* --- CONSTELLATION BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={70}
          nodeColor="rgba(111, 222, 247, 0.5)"
          lineColor="rgba(47, 139, 221, 0.1)"
          connectionDistance={150}
        />
      </div>

      {/* --- BG GLOW ELEMENTS --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F8BDD]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-[#6FDEF7] uppercase">
            About Aventra3
          </span>
        </motion.div>

        {/* Main Heading */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-[1.1]"
        >
          Where{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7]">
            Intelligence
          </span>{" "}
          Meets <br />
          <span className="italic font-serif">Execution</span>
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          <p data-aos="fade-up" data-aos-delay="100">
            Aventra3 was born from a simple realization: the gap between
            breakthrough technology and real-world impact is bridged by people.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 font-medium"
          >
            In the rapidly evolving landscapes of AI and Web3, the traditional
            recruitment model is broken. It's too slow, too generic, and lacks
            the technical depth required to vet high-level contributors.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            We are more than recruiters. We are ecosystem builders, technical
            advisors, and long-term partners to the companies defining the next
            century.
          </p>
        </div>

        {/* Subtle Bottom Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] mx-auto mt-16 rounded-full"
        />
      </div>
    </section>
  );
};

export default HomeMeetExecution;
