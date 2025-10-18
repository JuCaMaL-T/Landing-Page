
import type { FC } from "react";
import { ArrowRight } from "lucide-react";

export interface CardProps {
  cardIcon: string;
  imageAlt?: string;
  title: string;
  description: string;
  href?: string;
  imageClassName?: string;
}

const Card: FC<CardProps> = ({ cardIcon, imageAlt = "", title, description, href, imageClassName = "w-12 h-12 object-cover" }) => {
  return (
    <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/80 via-slate-700/20 to-indigo-500/30 hover:from-indigo-600/60 hover:to-purple-700/40 shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 h-full">
      <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col">
        <div className="mb-3 transform transition-transform duration-300 group-hover:-translate-y-1">
          <img src={cardIcon} alt={imageAlt} className={imageClassName} />
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