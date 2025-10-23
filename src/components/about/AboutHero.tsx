import type { FC } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Rocket } from "lucide-react";
import { textVariant } from "../landing/Variants";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

const AboutHero: FC = () => {
    const title = ["Conoce ", "Nuestro ", "Equipo"];
    const isMobile = useIsMobile();
    const shouldReduceMotion = useReducedMotion();
    
    const showFloatingElements = !isMobile && !shouldReduceMotion;

    return (
        <div className="flex w-full min-h-[85vh] px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 lg:py-32 relative overflow-hidden items-center justify-center">
            
            {showFloatingElements && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-16 left-12 w-3 h-3 bg-blue-500 rounded-full opacity-60"
                        animate={{ 
                            y: [0, -30, 0], 
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute top-32 right-16 w-2 h-2 bg-blue-600 rounded-full opacity-50"
                        animate={{ 
                            y: [0, -20, 0], 
                            opacity: [0.5, 0.9, 0.5],
                            x: [0, 10, 0]
                        }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                    />
                    <motion.div
                        className="absolute bottom-40 left-20 w-4 h-4 bg-blue-700 rounded-full opacity-40"
                        animate={{ 
                            y: [0, -25, 0], 
                            opacity: [0.4, 0.8, 0.4],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute bottom-24 right-28 w-2 h-2 bg-blue-800 rounded-full opacity-70"
                        animate={{ 
                            y: [0, -15, 0], 
                            opacity: [0.7, 1, 0.7],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: 2 }}
                    />

                    <motion.div
                        className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-blue-500/30 rounded-full"
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-blue-600/30"
                        animate={{ 
                            rotate: [0, -360],
                            y: [0, -10, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />
                </div>
            )}

            <div className="flex flex-col items-center text-center max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    className="flex items-center gap-3 mt-4 mb-8 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-900/20 border border-blue-500/40"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Heart className="w-5 h-5 text-blue-500" />
                    <span className="text-blue-500 text-sm font-medium">Pasión por la Tecnología</span>
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
                                word.includes("Nuestro")
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
                    Somos un equipo de visionarios tecnológicos unidos por la pasión de crear 
                    soluciones innovadoras que transforman negocios y mejoran vidas. 
                    Conoce las mentes brillantes detrás de JUCAMAL Tecnología.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <button className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
                        <Users className="w-5 h-5 group-hover:animate-pulse" />
                        <span>Conocer al Equipo</span>
                    </button>

                    <button className="group px-8 py-4 rounded-2xl border border-blue-600 text-white hover:bg-blue-900/30 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                        <span className="flex items-center gap-2">
                            <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                            Nuestra Historia
                        </span>
                    </button>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <div className="text-center group">
                        <motion.div 
                            className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-2"
                            whileHover={!isMobile ? { scale: 1.1 } : {}}
                        >
                            5
                        </motion.div>
                        <div className="text-gray-400 text-sm">Trabajadores Dedicados</div>
                    </div>

                    <div className="text-center group">
                        <motion.div 
                            className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2"
                            whileHover={!isMobile ? { scale: 1.1 } : {}}
                        >
                            100%
                        </motion.div>
                        <div className="text-gray-400 text-sm">Compromiso</div>
                    </div>

                    <div className="text-center group">
                        <motion.div 
                            className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-2"
                            whileHover={!isMobile ? { scale: 1.1 } : {}}
                        >
                            ∞
                        </motion.div>
                        <div className="text-gray-400 text-sm">Pasión</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutHero;