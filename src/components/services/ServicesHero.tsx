import type { FC } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { textVariant } from "../landing/Variants";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ServicesHero: FC = () => {
    const title = ["Nuestros ", "Servicios ", "Tecnológicos"];
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const shouldReduceMotion = useReducedMotion();

    const showFloatingElements = !isMobile && !shouldReduceMotion;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex w-full min-h-[80vh] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 lg:py-32 relative overflow-hidden items-center justify-center">
            
            {showFloatingElements && isVisible && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-60"
                        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-40 right-20 w-3 h-3 bg-blue-600 rounded-full opacity-40"
                        animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                    <motion.div
                        className="absolute bottom-32 left-32 w-1 h-1 bg-blue-700 rounded-full opacity-70"
                        animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-40 w-2 h-2 bg-blue-800 rounded-full opacity-50"
                        animate={{ y: [0, -25, 0], opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
                    />
                </div>
            )}

            <div className="flex flex-col items-center text-center max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    className="flex items-center gap-2 mt-4 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-900/20 border border-blue-500/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    <span className="text-blue-500 text-sm font-medium">Soluciones Innovadoras</span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold mb-8 leading-tight text-white drop-shadow-lg"
                    initial="hidden"
                    animate="visible"
                >
                    {title.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={textVariant}
                            className={
                                word.includes("Servicios")
                                    ? "bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text"
                                    : ""
                            }
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg lg:text-xl xl:text-2xl font-sans font-light text-gray-300 max-w-4xl mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    Descubre cómo nuestras soluciones tecnológicas pueden transformar tu negocio. 
                    Desde inteligencia artificial hasta desarrollo de software personalizado, 
                    te acompañamos en cada paso de tu transformación digital.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-2">6+</div>
                        <div className="text-gray-400 text-sm">Servicios Especializados</div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2">100%</div>
                        <div className="text-gray-400 text-sm">Personalización</div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-2">24/7</div>
                        <div className="text-gray-400 text-sm">Soporte Técnico</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ServicesHero;