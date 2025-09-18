import type { FC } from "react";
import { useState } from "react";
import { AlignJustify, X, Home, Briefcase, Users, Mail, LogIn, } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Servicios", href: "/services", icon: Briefcase },
    { name: "Nosotros", href: "/about", icon: Users },
    { name: "Contáctanos", href: "/contact", icon: Mail },
  ];

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white hover:text-indigo-400 transition-colors"
      >
        <AlignJustify size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex-1 bg-black/50"
              onClick={() => setIsOpen(false)}
            ></div>

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-4/5 sm:w-3/5 lg:w-1/3 h-full bg-slate-900/95 backdrop-blur-md border-l border-white/10 p-8 flex flex-col pt-20"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
              >
                <X size={28} />
              </button>

              <ul className="flex flex-col gap-8 text-left">
                {links.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 text-lg font-medium text-gray-200 hover:text-white transition group"
                    >
                      <Icon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                      <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-indigo-400 after:transition-all after:duration-300 group-hover:after:w-full">
                        {name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <button className="mt-12 flex items-center gap-3 px-6 py-3 rounded-xl border border-indigo-400/40 text-white font-semibold hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300">
                <LogIn className="w-5 h-5 text-indigo-400" />
                Iniciar Sesión
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;