import type { FC, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

const Card: FC<CardProps> = ({ icon, title, description, href }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700/40 via-slate-800/30 to-indigo-900/40 p-[1px] hover:from-indigo-600/40 hover:to-indigo-900/60 transform transition-transform duration-300 hover:scale-105 h-full">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full">
        <div className="mb-4">{icon}</div>
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-6">{description}</p>
        {href && (
          <a
            href={href}
            className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-lg text-white hover:bg-white/10 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;