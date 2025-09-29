import type { FC } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../../data/about/AboutData";
import TeamMemberCard from "../ui/TeamMemberCard";
import type { TeamMember } from "../ui/TeamMemberCard";
import { Users } from "lucide-react";

const Team: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-600/10 to-blue-900/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 0.8, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm tracking-widest text-blue-500 uppercase mb-5">
          Nuestro Equipo
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Las{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
            Mentes Brillantes
          </span>{" "}
          Detrás de JUCAMAL
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Cada miembro de nuestro equipo aporta una perspectiva única y habilidades 
          excepcionales que nos permiten crear soluciones extraordinarias.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {teamMembers.map((member, i) => (
          <TeamMemberCard key={i} member={member as TeamMember} index={i} />
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Quieres{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
              Unirte
            </span>{" "}
            a Nosotros?
          </h3>
          
          <p className="text-gray-300 mb-8">
            Siempre estamos buscando talento excepcional que comparta nuestra pasión 
            por la innovación tecnológica.
          </p>
          
          <motion.button
            className="group flex items-center gap-3 px-8 py-4 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Users className="w-5 h-5 group-hover:animate-pulse" />
            <span>Ver Oportunidades</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;