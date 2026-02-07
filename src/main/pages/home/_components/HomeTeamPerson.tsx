"use client";

import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/Meteors";
// import { Meteors } from "./Meteors"; // Import path thik thakle check koren

const teamMembers = [
  {
    id: 1,
    name: "Maria Johnson",
    role: "Senior Executive",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Senior Executive",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
  },
  {
    id: 3,
    name: "Maria Gabriel",
    role: "Senior Executive",
    image:
      "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg",
  },
];

const HomeTeamPerson = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-neutral-950">
      {/* --- METEORS BACKGROUND --- */}
      {/* count barale meteors barbe, angle diye dik thik kora jay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors
          count={400}
          color="#2F8BDD"
          tailColor="#6FDEF7"
          className="absolute opacity-30" // Fixed the positioning here
        />
      </div>
      {/* --- BG ANIMATION: Moving Gradient Mesh --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: "linear-gradient(135deg, #2F8BDD20, #6FDEF710)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            The Minds Behind the Mission
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
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
              whileHover={{ y: -15, rotateX: 2, rotateY: -2 }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium uppercase text-xs tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeamPerson;
