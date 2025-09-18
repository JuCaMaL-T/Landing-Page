import type { FC } from "react";
import MobileHeader from "./MobileHeader";
import { motion } from "framer-motion";

type Props = {};

const Header: FC<Props> = ({}) => {
  const links = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Contáctanos", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-7 py-4 z-50 
      bg-transparent before:content-[''] before:absolute before:inset-0 before:bg-black/20 
      before:backdrop-blur-md before:-z-10"
    >
      <a href="/">
        <img
          src="/Logo.png"
          alt="Jucamal Tecnología"
          className="w-28 object-cover"
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
          className="group flex items-center justify-center gap-2 px-8 py-3 rounded-2xl 
                    bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold 
                    shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
        >
          <a href="/login">Iniciar Sesión</a>
        </div>
      </div>

      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </motion.header>
  );
};

export default Header;