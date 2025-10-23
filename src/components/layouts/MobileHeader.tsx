import { useState } from "react";
import { AlignJustify, X, Home, Briefcase, Users, Mail, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Servicios", href: "/services", icon: Briefcase },
    { name: "Nosotros", href: "/about", icon: Users },
    { name: "Contáctanos", href: "/contact", icon: Mail },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white hover:text-indigo-400 transition-colors p-2"
        aria-label="Abrir menú"
      >
        <AlignJustify size={28} />
      </button>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              style={{ touchAction: 'none' }}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="fixed top-0 right-0 bottom-0 w-4/5 sm:w-3/5 max-w-sm h-full bg-slate-900 border-l border-white/10 shadow-2xl z-50"
            >
              <div className="flex flex-col h-full p-6 pt-20">
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2"
                  aria-label="Cerrar menú"
                >
                  <X size={28} />
                </button>

                <ul className="flex flex-col gap-6 text-left">
                  {links.map(({ name, href, icon: Icon }, index) => (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={href}
                        onClick={handleClose}
                        className="flex items-center gap-4 text-lg font-medium text-gray-200 hover:text-white transition-colors group py-2"
                      >
                        <Icon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                        <span className="relative">
                          {name}
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-indigo-400/40 text-white font-semibold hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 active:scale-95"
                >
                  <LogIn className="w-5 h-5 text-indigo-400" />
                  Iniciar Sesión
                </motion.button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;