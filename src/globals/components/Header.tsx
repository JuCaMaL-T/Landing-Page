import type { FC } from 'react';

type Props = {};

const Header: FC<Props> = ({ }) => {
    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-7 py-4 z-50 bg-transparent before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-md before:-z-10">

            <a href="/">
                <img src="/Logo.png" alt="Jucamal Tecnología" className="w-25 object-cover" />
            </a>

            <div className="lg:flex items-center space-x-12 hidden">
                <a href="/" className="text-white hover:text-blue-900">Inicio</a>
                <a href="/services" className="text-white hover:text-blue-900">Servicios</a>
                <a href="/about" className="text-white hover:text-blue-900">Nosotros</a>
                <a href="/contact" className="text-white hover:text-blue-900">Contactanos</a>
            </div>

            <div>
                <a href="/login" className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-indigo-900 border">Iniciar Sesión</a>
            </div>
        </div>
    );
};

export default Header;