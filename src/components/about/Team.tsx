import type { FC } from "react";
import { motion } from "framer-motion";
import { teamMembers } from "../../data/about/AboutData";
import { Star, Award, Code, Users } from "lucide-react";

const Team: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
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
        <p className="text-sm tracking-widest text-purple-400 uppercase mb-5">
          Nuestro Equipo
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Las{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
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
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative"
          >
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-transparent hover:from-white/30 hover:via-white/20 hover:to-white/10 transition-all duration-500">
              <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg rounded-3xl p-8 h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="relative mb-6 flex justify-center">
                    <div className="relative">
                      <motion.div
                        className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} p-1`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 text-white" />
                      </motion.div>

                      <motion.div
                        className="absolute inset-0 border-2 border-purple-400/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ scale: 1.4 }}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className={`text-sm font-semibold text-blue-400 bg-clip-text mb-1`}>
                      {member.role}
                    </p>
                    
                    <p className="text-gray-400 text-xs">
                      {member.speciality}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Award className="w-3 h-3 text-blue-400" />
                        <span className="text-blue-400 font-bold text-sm">{member.experience}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Experiencia</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Code className="w-3 h-3 text-purple-400" />
                        <span className="text-purple-400 font-bold text-sm">{member.projects}</span>
                      </div>
                      <p className="text-gray-400 text-xs">Proyectos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
          </motion.div>
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Unirte
            </span>{" "}
            a Nosotros?
          </h3>
          
          <p className="text-gray-300 mb-8">
            Siempre estamos buscando talento excepcional que comparta nuestra pasión 
            por la innovación tecnológica.
          </p>
          
          <motion.button
            className="group flex items-center gap-3 px-8 py-4 mx-auto rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/40"
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