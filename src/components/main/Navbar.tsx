"use client";

// import React, { useState } from "react";
import { Link,
    //  NavLink 
    } from "react-router";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import {
//   HiOutlineHome,
//   HiOutlineUser,
//   HiOutlineBriefcase,
//   HiOutlineUsers,
//   HiOutlinePuzzle,
// } from "react-icons/hi"; // Icons for side menu
import logo from "@/assets/main/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/", icon: <HiOutlineHome /> },
//     { name: "About", path: "/about", icon: <HiOutlineUser /> },
//     { name: "Services", path: "/services", icon: <HiOutlineBriefcase /> },
//     { name: "Industries", path: "/industries", icon: <HiOutlinePuzzle /> },
//     { name: "Team", path: "/team", icon: <HiOutlineUsers /> },
//   ];

//   return (
//     <>
//       {/* --- TOP BAR (Logo & Contact) --- */}
//       <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-5 bg-white/10 backdrop-blur-md">
//         <div className="mx-auto flex items-center justify-between">
//           <Link
//             to="/"
//             className="flex items-center gap-2 hover:scale-105 duration-500"
//           >
//             <img src={logo} alt="Aventra3" className="h-9" />
//           </Link>

//           <div className="flex items-center gap-4">
//             <button className="bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white px-8 py-2.5 rounded-full shadow-[0px_10px_20px_rgba(47,139,221,0.2)] hover:shadow-[#2F8BDD]/40 transition-all font-bold duration-500 hover:-translate-y-1">
//               Contact Us
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-3xl text-slate-800"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <HiX /> : <HiMenuAlt3 />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- SIDEBAR MENU (Sticky Desktop) --- */}
//       <aside className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-[99] flex-col gap-4">
//         <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-3 rounded-[2rem] shadow-[0px_15px_50px_rgba(0,0,0,0.08)] flex flex-col gap-2">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ${
//                   isActive
//                     ? "bg-gradient-to-br from-[#6FDEF7] to-[#2F8BDD] text-white shadow-lg"
//                     : "bg-transparent text-slate-500 hover:bg-slate-50 hover:text-[#2F8BDD]"
//                 }`
//               }
//             >
//               {/* Icon */}
//               <span className="text-2xl">{item.icon}</span>

//               {/* Tooltip text (Hover effect) */}
//               <span className="absolute right-16 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
//                 {item.name}
//               </span>
//             </NavLink>
//           ))}
//         </div>
//       </aside>

//       {/* --- MOBILE MENU OVERLAY --- */}
//       <div
//         className={`fixed inset-0 h-screen w-full bg-white z-[98] flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
//       >
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `text-2xl flex items-center gap-4 ${isActive ? "text-[#2F8BDD] font-black" : "text-slate-600 font-bold"}`
//             }
//           >
//             {item.icon} {item.name}
//           </NavLink>
//         ))}
//       </div>
//     </>
//   );
// };


// Navbar.jsx (Simplified)
const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="hover:scale-105 duration-500">
        <img src={logo} alt="Aventra3" className="h-8" />
      </Link>

      {/* Right Side - Contact Button Only */}
      <button className="bg-gradient-to-r from-[#6FDEF7] to-[#2F8BDD] text-white px-8 py-2.5 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-500">
        Contact Us
      </button>
    </div>
  );
};
export default Navbar;
