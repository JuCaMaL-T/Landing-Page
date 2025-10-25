import type { FC } from "react";
import MobileHeader from "./MobileHeader";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Props = {};

const Header: FC<Props> = ({}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const links = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Contáctanos", href: "/contact" },
  ];

  const headerAnimation = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } }
    : { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6, ease: "easeOut" } as Transition };

  return (
    <motion.header
      {...headerAnimation}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-7 py-4 z-50 
      bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
    >
      <a href="/" aria-label="Ir a inicio">
        <img
          src="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo.webp"
          alt="Jucamal Tecnología"
          className="w-28 object-cover"
          width="112"
          height="auto"
          loading="eager"
        />
      </a>

      <nav className="hidden lg:flex items-center space-x-10">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="relative text-white font-medium transition hover:text-indigo-400
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="hidden lg:block">
        <div
          className="group relative w-full flex items-center justify-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 text-white font-semibold transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 group/btn overflow-hidden"
        >
          <a href="#">Iniciar Sesión</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </motion.header>
  );
};

export default Header;