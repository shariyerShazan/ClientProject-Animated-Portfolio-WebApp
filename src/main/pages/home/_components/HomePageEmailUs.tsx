"use client";

// import React from "react";
import { motion } from "framer-motion";
import {
//   HiOutlineMail,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
// import { ConstellationBackground } from "./ConstellationBackground"; // Path check koren

const HomePageEmailUs = () => {
  const contactInfo = [
    { icon: <HiOutlineMail />, text: "example@gmail.com", label: "Email Us" },
    { icon: <HiOutlinePhone />, text: "+8801787939155", label: "Call Us" },
    {
      icon: <HiOutlineMapPin />,
      text: "123 Street 487 House",
      label: "Visit Us",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-neutral-950">
      {/* --- CONSTELLATION BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <ConstellationBackground
          count={60}
          nodeColor="rgba(111, 222, 247, 0.4)"
          lineColor="rgba(47, 139, 221, 0.1)"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8">
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-[#6FDEF7] uppercase">
              Contact us
            </span>
          </div>

          <h2 className="text-5xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
            Let't talk on something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7]">
              great
            </span>{" "}
            together
          </h2>

          <div className="space-y-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6FDEF7] text-2xl group-hover:bg-[#2F8BDD] group-hover:text-white transition-all duration-300 shadow-lg shadow-cyan-500/5">
                  {info.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">
                    {info.label}
                  </p>
                  <p className="text-white text-lg font-medium tracking-wide">
                    {info.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#6FDEF7] hover:border-[#6FDEF7]/50 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Contact Form (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Form Card Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2F8BDD]/20 to-[#6FDEF7]/20 blur-3xl opacity-30 rounded-[3rem]" />

          <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">
              Email Us
            </h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-semibold ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#6FDEF7]/50 focus:ring-1 focus:ring-[#6FDEF7]/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-semibold ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#6FDEF7]/50 focus:ring-1 focus:ring-[#6FDEF7]/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 text-sm font-semibold ml-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#6FDEF7]/50 focus:ring-1 focus:ring-[#6FDEF7]/30 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(111, 222, 247, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] text-white font-black text-lg tracking-wide shadow-xl shadow-blue-500/20 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageEmailUs;
