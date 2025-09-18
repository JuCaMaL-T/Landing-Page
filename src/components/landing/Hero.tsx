import type { FC } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { textVariant } from "./Variants";

const Hero: FC = () => {
    const title = ["Innovación ", "Digital ", "Para Tu Negocio"];

    return (
        <div className="flex w-full min-h-[85vh] lg:min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 lg:py-28 relative overflow-hidden items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-7xl mx-auto w-full relative z-10">

                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-sans font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-lg"
                    initial="hidden"
                    animate="visible"
                >
                    {title.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={textVariant}
                            className={
                                word.includes("Digital")
                                    ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text"
                                    : ""
                            }
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.p
                    className="text-sm sm:text-base lg:text-lg xl:text-xl font-sans font-light text-gray-300 max-w-3xl mb-10 sm:mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Desarrollamos soluciones tecnológicas impulsadas por inteligencia
                    artificial que transforman la forma en que las empresas operan y
                    crecen.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-5 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40">
                        <PlayCircle size={22} className="group-hover:animate-pulse" />
                        Ver Demo
                    </button>

                    <button className="px-8 py-3 rounded-2xl border border-indigo-400 text-white hover:bg-indigo-900/30 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                        Más Información
                    </button>
                </motion.div>

                <motion.div
                className="flex flex-row gap-8 sm:gap-20 mt-10 sm:mt-12 lg:mt-16 xl:mt-20 
                            overflow-x-auto sm:overflow-visible px-4 sm:px-0 scrollbar-hide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                >
                <div className="flex-shrink-0 text-center min-w-[100px]">
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-blue-400">1</div>
                    <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-400">Proyectos</div>
                </div>

                <div className="hidden sm:block w-px h-16 bg-gray-700"></div>

                <div className="flex-shrink-0 text-center min-w-[100px]">
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-purple-400">99%</div>
                    <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-400">Satisfacción</div>
                </div>

                <div className="hidden sm:block w-px h-16 bg-gray-700"></div>

                <div className="flex-shrink-0 text-center min-w-[100px]">
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-cyan-400">24/7</div>
                    <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-400">Soporte</div>
                </div>
                </motion.div>


            </div>
        </div>
    );
}

export default Hero;