import React from "react";
import type { FC } from "react";
import Card from "../ui/Card";
import { Brain, Laptop, Handshake, ArrowRight, Cpu, Rocket, Layers, Shield } from "lucide-react";

type Props = {
    children?: React.ReactNode
};

const IndexPanel: FC<Props> = ({ children }) => {
    return (
        <div className='flex flex-col p-3 space-between'>
            {children}
        </div>
    );
};


const Hero: FC<Props> = ({ }) => {
    return (
        <div className="flex w-full min-h-[85vh] lg:min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col justify-center text-left order-2 lg:order-1">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold mb-6 sm:mb-8 leading-tight animate-fadeInUp">
                        <span className="text-white drop-shadow-lg">Innovación</span>{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text relative">
                            Digital
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-pulse opacity-50">
                                Digital
                            </span>
                        </span>{" "}
                        <span className="text-white drop-shadow-lg">Para Tu<br />Negocio</span>
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg font-sans font-light text-gray-300 max-w-lg mb-8 sm:mb-10 leading-relaxed animate-fadeInUp delay-200 relative">
                        Desarrollamos soluciones tecnológicas impulsadas por inteligencia artificial que transforman la forma en que las empresas operan y crecen.
                        <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent opacity-30"></span>
                    </p>

                    <div className="flex gap-6 mb-8 animate-fadeInUp delay-300">
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
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 animate-fadeInUp delay-400">
                        <button className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-3.5 text-white transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105">
                            Demos
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button className="group rounded-xl border border-indigo-500 hover:border-indigo-400 px-6 sm:px-8 py-3 sm:py-3.5 text-white hover:bg-indigo-900/20 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm hover:shadow-lg">
                            Más Información
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl animate-fadeInRight">
                        <div className="relative">
                            <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-800/20 to-slate-900/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                                <img
                                    src="/MockUp.png"
                                    alt="Mockups de la aplicación"
                                    className="w-full h-auto rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl animate-bounce delay-1000"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl animate-bounce delay-500"></div>
                        <div className="absolute top-1/4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full blur-md animate-pulse delay-700"></div>

                        <div className="absolute top-1/3 -left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
                        <div className="absolute bottom-1/3 -right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
                        <div className="absolute top-2/3 -left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Services: FC<Props> = ({ }) => {
    return (
        <div className="flex flex-col w-full px-4 sm:px-6 md:px-8">

            <div className="max-w-6xl mx-auto text-center mb-12">
                <p className="text-sm tracking-widest text-gray-400 uppercase mb-4">
                    Services
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Superando Las Expectativas
                </h2>

                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                    Aquí va a ir una frase pequeña que sea impactante sobre los servicios que vamos a proveer
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                <Card
                    icon={<Brain className="w-10 h-10 text-indigo-400" />}
                    title="Inteligencia Artificial"
                    description="Aquí va a ir una frase que describa un poquito del producto y que genere intriga en la gente, para que hagan click en el enlace para ver toda la info."
                    href="/services/ai"
                />
                <Card
                    icon={<Laptop className="w-10 h-10 text-indigo-400" />}
                    title="Desarrollo de Software"
                    description="Aquí va a ir una frase que describa un poquito del producto y que genere intriga en la gente, para que hagan click en el enlace para ver toda la info."
                    href="/services/development"
                />
                <Card
                    icon={<Handshake className="w-10 h-10 text-indigo-400" />}
                    title="Consultoría Tecnológica"
                    description="Aquí va a ir una frase que describa un poquito del producto y que genere intriga en la gente, para que hagan click en el enlace para ver toda la info."
                    href="/services/consulting"
                />
            </div>
        </div>
    );
}

const SoftwareLaunch: FC<Props> = ({ }) => {
    return (
        <section className="w-full min-h-screen text-white p-6 sm:p-10 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="flex items-center justify-center border border-gray-600 rounded-2xl min-h-[240px] sm:min-h-[360px] md:min-h-[480px] relative overflow-hidden">
                    <span className="absolute top-3 left-3 sm:top-5 sm:left-5 border-t-2 border-l-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-tl-lg"></span>
                    <span className="absolute top-3 right-3 sm:top-5 sm:right-5 border-t-2 border-r-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-tr-lg"></span>
                    <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 border-b-2 border-l-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-bl-lg"></span>
                    <span className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 border-b-2 border-r-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-br-lg"></span>

                    <img
                        src="/Logo.png"
                        alt="Vista previa del software"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                <div>
                    <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-400">Nuevo</p>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Nuestro Lanzamiento
                        </span>{" "}
                        Mas Reciente
                    </h2>
                    <p className="text-gray-300 mb-6 text-sm sm:text-base">
                        Aquí ponemos una pequeña descripción del software de construcción
                        (Hay que buscarle nombre, tiene que llamar la atención y llevar a la gente
                        a que vea un demo de la plataforma y lo que puede hacer).
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                        <Card
                            icon={<Rocket className="w-6 h-6 text-blue-400" />}
                            title="Rendimiento Óptimo"
                            description="Optimizado para brindar la mejor experiencia en proyectos grandes."
                        />
                        <Card
                            icon={<Layers className="w-6 h-6 text-purple-400" />}
                            title="Gestión Modular"
                            description="Organiza los recursos de tu construcción en módulos fáciles de usar."
                        />
                        <Card
                            icon={<Cpu className="w-6 h-6 text-green-400" />}
                            title="Automatización"
                            description="Automatiza procesos repetitivos para ahorrar tiempo y reducir errores."
                        />
                        <Card
                            icon={<Shield className="w-6 h-6 text-red-400" />}
                            title="Seguridad Avanzada"
                            description="Protección de datos y acceso seguro con cifrado de última generación."
                        />
                    </div>

                    <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-gray-500 hover:border-green-400 transition hover:bg-green-400 hover:text-black text-sm sm:text-base">
                        Requerir Demo <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Object.assign(
    IndexPanel,
    {
        Hero,
        Services,
        SoftwareLaunch
    }
)