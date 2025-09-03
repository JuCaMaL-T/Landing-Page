import type { FC } from "react";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

type Props = {};

const MobileHeader: FC<Props> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        {isOpen ? <X size={28} /> : <AlignJustify size={28} />}
      </button>

      {isOpen && (
        <nav className="absolute top-12 right-4 bg-white shadow-lg rounded-xl mt-2 p-4 w-48">
          <ul className="flex flex-col gap-3 text-gray-800">
            <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
            <li className="hover:text-blue-600 cursor-pointer">Servicios</li>
            <li className="hover:text-blue-600 cursor-pointer">Nosotros</li>
            <li className="hover:text-blue-600 cursor-pointer">Contactanos</li>
          </ul>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Iniciar Sesión
          </button>
        </nav>
      )}
    </div>
  );
};

export default MobileHeader;
