"use client";

import React from "react";
import { motion } from "framer-motion";
import person2 from "@/assets/main/p.png";
import person3 from "@/assets/main/p2.png";
import person1 from "@/assets/main/p3.png";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
// import { ConstellationBackground } from "./ConstellationBackground"; // Path check koren

const teamMembers = [
  {
    id: 1,
    name: "Maria Johnson",
    role: "Senior Executive",
    image: person1,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Senior Executive",
    image: person2,
  },
  {
    id: 3,
    name: "Maria Gabriel",
    role: "Senior Executive",
    image: person3,
  },
];

const HomeTeamPerson = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-neutral-950">
      {/* --- CONSTELLATION BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={80}
          nodeColor="rgba(111, 222, 247, 0.5)"
          lineColor="rgba(47, 139, 221, 0.1)"
        />
      </div>

      {/* --- BG ANIMATION: Subtle Glows --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#6FDEF7]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#2F8BDD]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#6FDEF7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6FDEF7]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            The Minds Behind <br /> the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7]">
              Mission
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed border-t border-white/5 pt-6">
            A specialized collective of industry veterans dedicated to scaling
            the tech world.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -15 }}
              className="relative group"
            >
              {/* Card Container with Glassmorphism */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm">
                {/* Image Section */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000 ease-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Subtle Accent Line */}
                  <div className="w-12 h-1 bg-[#6FDEF7] mb-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#6FDEF7] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 font-medium uppercase text-[10px] tracking-[0.2em]">
                    {member.role}
                  </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-[#6FDEF7]/0 group-hover:border-[#6FDEF7]/30 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Background Shadow Glow on Hover */}
              <div className="absolute -inset-2 bg-[#2F8BDD]/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeamPerson;
