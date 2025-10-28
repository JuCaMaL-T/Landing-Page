import type { FC } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { PlayCircle } from "lucide-react";
import type { Variants } from "framer-motion";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

const Hero: FC = () => {
    const title = ["TU ", "TRANSFORMACION DIGITAL ", "COMIENZA AQUI:"];
    const isMobile = useIsMobile();
    const shouldReduceMotion = useReducedMotion();

    const shouldSimplify = isMobile || shouldReduceMotion;

    const textVariant: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="flex w-full min-h-[85vh] lg:min-h-screen px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-14 lg:py-26 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto w-full relative z-10">

                <div className="flex flex-col justify-center text-left order-2 md:order-1">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-goodtime mb-6 sm:mb-8 md:mb-8 leading-tight text-white drop-shadow-lg"
                        initial="hidden"
                        animate="visible"
                    >
                        {title.map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={shouldSimplify ? undefined : textVariant}
                                initial={shouldSimplify ? { opacity: 1, y: 0 } : "hidden"}
                                animate={shouldSimplify ? { opacity: 1, y: 0 } : "visible"}
                                className={
                                    word.includes("TRANSFORMACION DIGITAL")
                                        ? "bg-white text-transparent bg-clip-text"
                                        : ""
                                }
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <motion.p
                        className="text-sm sm:text-base md:text-base lg:text-lg font-sans font-bold text-gray-300 max-w-lg mb-8 sm:mb-10 md:mb-10 leading-relaxed relative"
                        initial={{ opacity: 0, y: shouldSimplify ? 10 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldSimplify ? 0.2 : 0.5, duration: shouldSimplify ? 0.3 : 0.8 }}
                    >
                        En Jucamal Tecnología desarrollamos soluciones inteligentes y eficientes que optimizan procesos, impulsan la innovación y fortalecen el crecimiento sostenible de tu empresa.
                        <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-30"></span>
                    </motion.p>

                    {/* <motion.div
                        className="flex gap-4 md:gap-6 mb-8 md:mb-10 flex-wrap md:flex-nowrap"
                        initial={{ opacity: 0, y: shouldSimplify ? 10 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldSimplify ? 0.3 : 0.8, duration: shouldSimplify ? 0.3 : 0.8 }}
                    >
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">1</div>
                            <div className="text-sm md:text-base text-white">Proyectos</div>
                        </div>
                        <div className="w-px h-12 bg-gray-700 hidden md:block"></div>
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">99%</div>
                            <div className="text-sm md:text-base text-white">Satisfacción</div>
                        </div>
                        <div className="w-px h-12 bg-gray-700 hidden md:block"></div>
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">24/7</div>
                            <div className="text-sm md:text-base text-white">Soporte</div>
                        </div>
                    </motion.div>  */}

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 md:gap-5"
                        initial={{ opacity: 0, y: shouldSimplify ? 10 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldSimplify ? 0.4 : 1, duration: shouldSimplify ? 0.3 : 0.8 }}
                    >
                        <button className="group flex items-center justify-center gap-2 px-6 sm:px-8 md:px-8 py-3 rounded-2xl bg-slate-950 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40 text-sm sm:text-base">
                            <PlayCircle size={20} className="group-hover:animate-pulse" />
                            Ver Demo
                        </button>

                        <button className="px-6 sm:px-8 md:px-8 py-3 rounded-2xl border border-indigo-400 text-white hover:bg-indigo-900/30 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base">
                            Más Información
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="flex items-center justify-center order-1 md:order-2 md: mt-18"
                    initial={{ opacity: 0, x: shouldSimplify ? 0 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: shouldSimplify ? 0.2 : 0.5, duration: shouldSimplify ? 0.3 : 1 }}
                >
                    {!isMobile ? (
                        <Tilt
                            tiltMaxAngleX={8}
                            tiltMaxAngleY={8}
                            perspective={1000}
                            scale={1.03}
                            transitionSpeed={1500}
                            className="w-full max-w-2xl"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo-poster.webp"
                                className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/20"
                            >
                                <source src="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo.webm" type="video/webm" />
                                <img src="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo-poster.webp" alt="Jucamal Logo" />
                            </video>
                        </Tilt>
                    ) : (
                        <div className="w-full max-w-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo-poster.webp"
                                className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/20"
                            >
                                <source src="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo.webm" type="video/webm" />
                                <img src="https://cdn.jsdelivr.net/gh/DavidMRB/assets-web@main/Landing/Logo-poster.webp" alt="Jucamal Logo" />
                            </video>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;