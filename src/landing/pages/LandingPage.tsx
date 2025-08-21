import React from "react";
import type { FC } from "react";
import Card from "../../globals/components/Card";
import { Brain, Laptop, Handshake, ArrowRight } from "lucide-react";

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
        <div className="flex flex-col w-full min-h-screen items-center justify-center px-4 md:px-8 text-center">
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
        <div className="flex flex-col w-full">

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

export default Object.assign(
    IndexPanel,
    {
        Hero,
        Services
    }
)