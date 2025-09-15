import type { FC, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  iconClassName?: string;
}

const Card: FC<CardProps> = ({ icon: Icon, title, description, href, iconClassName= "w-12 h-12 text-indigo-400" }) => {
  return (
    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/40 via-slate-700/20 to-purple-600/30 hover:from-indigo-600/60 hover:to-purple-700/40 shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 h-full">
      <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col">
        <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-1">
          <Icon className={iconClassName} />
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        <p className="text-gray-300 flex-grow">{description}</p>

        {href && (
          <a
            href={href}
            className="mt-6 inline-flex items-center gap-2 text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors"
          >
            Ver más
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;