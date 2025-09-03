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
        <div className="flex flex-col w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] items-center justify-center px-4 md:px-8 text-center py-12">
            <div className="bg-slate-400 px-4 py-1 md:px-8 md:py-2 rounded-tl-lg rounded-br-lg mb-5">
                <h1 className="text-xs md:text-sm font-sans font-light text-white">Jucamal Tecnología</h1>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-sans font-bold mb-6 leading-snug bg-gradient-to-r from-white via-gray-500 to-indigo-900 text-transparent bg-clip-text">Innovación Digital Para Tu<br />Negocio</h2>
            <h1 className="text-sm sm:text-base md:text-lg font-sans font-light text-white max-w-2xl">Desarrollamos soluciones tecnológicas impulsadas por inteligencia artificial que transforman la forma en que las operan y crecen.</h1>
            <div className="flex flex-row items-center gap-4 mt-8">
                <button className="flex items-center gap-2 rounded-xl bg-indigo-900 px-6 py-2 text-white hover:bg-indigo-800 transition">
                    Demos <ArrowRight size={16} />
                </button>
                <button className="rounded-xl border border-indigo-900 px-6 py-2 text-white hover:bg-indigo-900/10 transition">
                    Más Información
                </button>
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