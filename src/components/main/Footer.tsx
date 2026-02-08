"use client";


import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@/assets/main/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Industries", path: "/industries" },
        { name: "Team", path: "/team" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Executive Search", path: "/services" },
        { name: "Technical Recruitment", path: "/services" },
        { name: "Talent Advisory", path: "/services" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "AI & Machine Learning", path: "/industries" },
        { name: "Blockchain", path: "/industries" },
        { name: "Web3 & DeFi", path: "/industries" },
        { name: "Crypto", path: "/industries" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "#", color: "#0077B5" },
    { icon: <FaFacebookF />, url: "#", color: "#1877F2" },
    { icon: <FaInstagram />, url: "#", color: "#E4405F" },
  ];

  return (
    <footer className="relative z-10 w-full pt-20 pb-10 overflow-hidden">
      {/* Top Divider with Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6FDEF7]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-4"
          >
            <Link to="/" className="inline-block mb-6 ">
              <img src={logo} alt="Aventra3" className="h-10 brightness-110" />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Connecting exceptional talent with the most innovative companies
              in AI, Blockchain, and Web3.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-[#6FDEF7] hover:border-[#6FDEF7] transition-all duration-300 shadow-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold mb-6 text-lg tracking-tight">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group text-slate-400 hover:text-[#6FDEF7] transition-all duration-300"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#6FDEF7] transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} Aventra3. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-slate-500 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-500 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
