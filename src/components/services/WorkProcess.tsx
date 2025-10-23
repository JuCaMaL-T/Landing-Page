import type { FC } from "react";
import { motion } from "framer-motion";
import { processSteps } from "../../data/services/OurServicesData";
import { Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

const WorkProcess: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const showFloatingElements = !isMobile && !shouldReduceMotion;
  const showOrbitalAnimations = !isMobile && !shouldReduceMotion;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      
      {showFloatingElements && isVisible && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-blue-900/5 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-blue-900/5 rounded-full blur-2xl"
            animate={{ scale: [1.2, 0.8, 1.2], y: [0, -40, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>
      )}

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: "-50px" }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: "easeOut" }}
      >
        <p className="text-sm tracking-widest text-blue-400 uppercase mb-5">
          Nuestro Proceso
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          ¿Cómo{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            Trabajamos
          </span>
          ?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Seguimos una metodología probada que garantiza resultados excepcionales 
          y una experiencia colaborativa única.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: "-50px" }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: shouldReduceMotion ? 0.1 : 0.2 },
          },
        }}
      >
        {processSteps.map((step, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: shouldReduceMotion ? 0 : (i % 2 === 0 ? -60 : 60) },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" }}
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 last:mb-0 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                {step.description}
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <motion.div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-900/20 border-2 border-blue-400/30 flex items-center justify-center relative"
                  whileHover={!isMobile && !shouldReduceMotion ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl sm:text-4xl font-bold text-blue-400">
                    {step.step}
                  </span>
                  
                  {showOrbitalAnimations && (
                    <>
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ scale: 1.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 border border-blue-900/20 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ scale: 1.6 }}
                      />
                      
                      <motion.div
                        className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "center 80px" }}
                      />
                      <motion.div
                        className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full transform -translate-x-1/2"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "center 100px" }}
                      />
                    </>
                  )}
                </motion.div>
              </div>
            </div>

            {i < processSteps.length - 1 && !isMobile && (
              <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8">
                <motion.div
                  className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-blue-900/50"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: shouldReduceMotion ? 0 : 0.5 }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkProcess;