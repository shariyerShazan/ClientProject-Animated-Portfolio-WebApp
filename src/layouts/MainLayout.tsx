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

const MainLayout = () => {
  const sideNavItems = [
    { name: "Home", path: "/", icon: <HiOutlineHome /> },
    { name: "About", path: "/about", icon: <HiOutlineUser /> },
    { name: "Services", path: "/services", icon: <HiOutlineBriefcase /> },
    { name: "Industries", path: "/industries", icon: <HiOutlineCollection /> },
    { name: "Team", path: "/team", icon: <HiOutlineUsers /> },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* --- TOP NAVBAR (Logo & Contact Button Only) --- */}
      <header className="fixed top-0 z-[60] w-full bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="w-[90%] mx-auto py-4">
          <Navbar />
        </div>
      </header>

      {/* --- FLOATING SIDE NAVIGATION (As per Screenshot) --- */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
        <div className="flex flex-col gap-3 p-3 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0px_20px_50px_rgba(47,139,221,0.15)] border border-white/40">
          {sideNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white shadow-lg"
                    : "bg-white/50 text-slate-500 hover:bg-white hover:text-[#2F8BDD]"
                }`
              }
            >
              {/* Icon */}
              <span className="text-2xl">{item.icon}</span>

              {/* Tooltip Label (Hover Effect) */}
              <span className="absolute right-16 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* Footer can go here */}
    </div>
  );
};

export default MainLayout;
