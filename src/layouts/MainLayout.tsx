"use client";

import Navbar from "@/components/main/Navbar";
import { NavLink, Outlet } from "react-router";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineCollection,
} from "react-icons/hi";
import { motion } from "framer-motion";
import Footer from "@/components/main/Footer";
import { ConstellationBackground } from "@/components/ui/ConstellationBackground"; // Check path

const MainLayout = () => {
  const sideNavItems = [
    { name: "Home", path: "/", icon: <HiOutlineHome /> },
    { name: "About", path: "/about", icon: <HiOutlineUser /> },
    { name: "Services", path: "/services", icon: <HiOutlineBriefcase /> },
    { name: "Industries", path: "/industries", icon: <HiOutlineCollection /> },
    { name: "Team", path: "/team", icon: <HiOutlineUsers /> },
  ];

  return (
    // Body ekhon ekebare dark thakbe
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden text-white">
      {/* --- GLOBAL CONSTELLATION BACKGROUND --- */}
      <ConstellationBackground
        count={120}
        nodeColor="#6FDEF7"
        lineColor="rgba(111, 222, 247, 0.15)"
      />

      {/* --- ANIMATED GRID LINES (THE FRAME) --- */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6FDEF7]/50 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2F8BDD]/50 to-transparent"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute left-4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#6FDEF7]/50 to-transparent"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute right-4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#2F8BDD]/50 to-transparent"
        />

        {/* L-Shapes / Crosses */}
        <div className="absolute top-4 left-4 w-8 h-8">
          <div className="absolute top-0 left-[-10px] w-10 h-[2px] bg-[#6FDEF7] shadow-[0_0_10px_#6FDEF7]" />
          <div className="absolute top-[-10px] left-0 w-[2px] h-10 bg-[#6FDEF7] shadow-[0_0_10px_#6FDEF7]" />
        </div>
        <div className="absolute top-4 right-4 w-8 h-8">
          <div className="absolute top-0 right-[-10px] w-10 h-[2px] bg-[#2F8BDD] shadow-[0_0_10px_#2F8BDD]" />
          <div className="absolute top-[-10px] right-0 w-[2px] h-10 bg-[#2F8BDD] shadow-[0_0_10px_#2F8BDD]" />
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-8">
          <div className="absolute bottom-0 left-[-10px] w-10 h-[2px] bg-[#2F8BDD] shadow-[0_0_10px_#2F8BDD]" />
          <div className="absolute bottom-[-10px] left-0 w-[2px] h-10 bg-[#2F8BDD] shadow-[0_0_10px_#2F8BDD]" />
        </div>
        <div className="absolute bottom-4 right-4 w-8 h-8">
          <div className="absolute bottom-0 right-[-10px] w-10 h-[2px] bg-[#6FDEF7] shadow-[0_0_10px_#6FDEF7]" />
          <div className="absolute bottom-[-10px] right-0 w-[2px] h-10 bg-[#6FDEF7] shadow-[0_0_10px_#6FDEF7]" />
        </div>
      </div>

      {/* --- TOP NAVBAR --- */}
      <header className="fixed top-8 z-[60] w-full px-12">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl py-4 px-8 shadow-2xl">
          <Navbar />
        </div>
      </header>

      {/* --- SIDE NAVIGATION --- */}
      <aside className="fixed right-10 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
        <div className="flex flex-col gap-4 p-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
          {sideNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white rotate-[360deg]"
                    : "text-slate-500 hover:text-[#6FDEF7]"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="absolute right-16 px-3 py-1 rounded bg-slate-800 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-all">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </aside>

      {/* --- CONTENT --- */}
      <main className="relative z-10 pt-32 min-h-screen">
        <Outlet />
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

export default MainLayout;
