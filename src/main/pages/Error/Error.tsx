"use client";

import{ useEffect } from "react";
import { motion } from "framer-motion";

import { ConstellationBackground } from "@/components/ui/ConstellationBackground";
import { Link } from "react-router";

const Error = () => {
  // Page load hole top-e niye jaoa
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 px-6">
      {/* Background Constellation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ConstellationBackground
          count={50}
          nodeColor="rgba(111, 222, 247, 0.5)"
          lineColor="rgba(47, 139, 221, 0.1)"
        />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#2F8BDD]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center">
        {/* Animated 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/20 to-transparent opacity-20 select-none"
        >
          404
        </motion.h1>

        {/* Error Message */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Lost in <span className="text-[#6FDEF7]">Cyberspace?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto mb-10 font-medium">
              The page you are looking for has been moved or doesn't exist in
              our current dimension.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-black rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
                >
                  Back to Reality
                </motion.button>
              </Link>

              <Link to="/contact">
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all">
                  Report Issue
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Noise Texture overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </div>
  );
};

export default Error;
