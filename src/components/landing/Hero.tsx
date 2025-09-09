import type { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { textVariant } from "./Variants";

const Hero: FC = () => {
    const title = ["Innovación ", "Digital ", "Para Tu Negocio"];

    return (
        <div className="flex w-full min-h-[85vh] lg:min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto w-full relative z-10">

                <div className="flex flex-col justify-center text-left order-2 lg:order-1">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-lg"
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
                        className="text-sm sm:text-base lg:text-lg font-sans font-light text-gray-300 max-w-lg mb-8 sm:mb-10 leading-relaxed relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Desarrollamos soluciones tecnológicas impulsadas por inteligencia
                        artificial que transforman la forma en que las empresas operan y
                        crecen.
                        <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-30"></span>
                    </motion.p>

                    <motion.div
                        className="flex gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-blue-400">1</div>
                            <div className="text-xs text-gray-400">Proyectos</div>
                        </div>
                        <div className="w-px h-12 bg-gray-700"></div>
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-purple-400">99%</div>
                            <div className="text-xs text-gray-400">Satisfacción</div>
                        </div>
                        <div className="w-px h-12 bg-gray-700"></div>
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl font-bold text-cyan-400">24/7</div>
                            <div className="text-xs text-gray-400">Soporte</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                    >
                        <button className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-3.5 text-white transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105">
                            Demos
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </button>
                        <button className="group rounded-xl border border-indigo-500 hover:border-indigo-400 px-6 sm:px-8 py-3 sm:py-3.5 text-white hover:bg-indigo-900/20 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm hover:shadow-lg">
                            Más Información
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="flex items-center justify-center order-1 lg:order-2"
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                >
                    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-800/20 to-slate-900/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                            <img
                                src="/MockUp.png"
                                alt="Mockups de la aplicación"
                                className="w-full h-auto rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;