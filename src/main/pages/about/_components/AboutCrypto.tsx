"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// Jekono ekta crypto related transparent image path ekhane diben
import cryptoImage from "@/assets/main/crypto.svg";

const AboutCrypto = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Parallax movement values
  const moveX = useTransform(mouseX, [-0.5, 0.5], ["-25px", "25px"]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], ["-25px", "25px"]);
  const coinMoveX = useTransform(mouseX, [-0.5, 0.5], ["40px", "-40px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Right Content (Image First on Mobile) - Order change kore dilam ektu variety-r jonno */}
        <div className="relative flex justify-center items-center h-[500px] lg:order-2">
          <motion.div
            style={{ x: moveX, y: moveY }}
            className="relative z-10 w-[80%] drop-shadow-[0_0_80px_rgba(111,222,247,0.15)]"
          >
            <img
              src={cryptoImage}
              alt="Crypto Ecosystem"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Floating Stat Card 1 */}
          <motion.div
            style={{ x: coinMoveX, y: moveY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-10 right-0 z-20 bg-neutral-900/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl min-w-[180px]"
          >
            <h4 className="text-2xl font-black text-[#6FDEF7]">$500M+</h4>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Assets Managed
            </p>
          </motion.div>

          {/* Floating Stat Card 2 */}
          <motion.div
            style={{ x: moveY, y: coinMoveX }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-10 left-0 z-20 bg-neutral-900/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl min-w-[180px]"
          >
            <h4 className="text-2xl font-black text-[#2F8BDD]">Secured</h4>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Blockchain Protocol
            </p>
          </motion.div>
        </div>

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:order-1"
        >
          <div className="inline-flex items-center gap-2.5 px-3 py-1 border-l-3 border-[#6FDEF7] bg-[#6FDEF7]/10 mb-8">
            <span className="flex h-2 w-2">
              <span className="flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#ea2857] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea2857]"></span>
              </span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6FDEF7]"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.4em] text-blue-300 uppercase">
              Web3 & Crypto
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            Navigating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FDEF7] to-indigo-400">
              Decentralized Web
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            From DeFi protocols to NFT marketplaces, we specialize in scaling
            the teams that power the future of digital finance and decentralized
            identity.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h5 className="text-white font-bold mb-1">DeFi Alpha</h5>
              <p className="text-xs text-slate-500">
                Yield optimization & liquidity.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h5 className="text-white font-bold mb-1">Node Ops</h5>
              <p className="text-xs text-slate-500">
                Infrastructure & validator sets.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-white text-black font-black rounded-full overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Ecosystem{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCrypto;
