import type { FC } from "react";
import { motion } from "framer-motion";
import { milestones } from "../../data/about/AboutData";
import { Clock, TrendingUp, Calendar } from "lucide-react";

const Timeline: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="w-6 h-6 text-cyan-400" />
          <p className="text-sm tracking-widest text-cyan-400 uppercase">
            Nuestra Historia
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          El{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
            Camino
          </span>{" "}
          Hacia la Excelencia
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Cada paso que hemos dado nos ha llevado a ser quienes somos hoy. 
          Descubre los momentos clave que han definido nuestra evolución.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 transform -translate-x-1/2 hidden lg:block" />
        
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {milestones.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: isEven ? -60 : 60 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Contenido */}
                <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}>
                  <motion.div
                    className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent hover:from-white/30 hover:via-white/20 hover:to-white/5 transition-all duration-500"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
                      {/* Efecto de brillo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Badge del año */}
                        <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400 font-semibold text-sm">{milestone.year}</span>
                          </div>
                          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30">
                            <span className="text-green-400 font-medium text-xs">{milestone.achievement}</span>
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                          {milestone.title}
                        </h3>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Barra de progreso decorativa */}
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Punto central (solo visible en desktop) */}
                <div className="hidden lg:flex items-center justify-center relative">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                  </motion.div>

                  {/* Anillos orbitales */}
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-blue-400/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.8 }}
                  />
                </div>

                {/* Espacio equivalente para mantener simetría */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Sección de futuro */}
      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-purple-400 font-medium">El Viaje Continúa...</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Construyendo el{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Futuro
            </span>
          </h3>

          <p className="text-gray-300 leading-relaxed mb-8">
            Cada día escribimos nuevos capítulos en nuestra historia. Con cada proyecto, 
            cada innovación y cada cliente satisfecho, seguimos evolucionando hacia 
            nuevos horizontes tecnológicos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Próximos Proyectos", value: "10+", color: "from-blue-400 to-cyan-400" },
              { label: "Nuevas Tecnologías", value: "5", color: "from-purple-400 to-pink-400" },
              { label: "Visión", value: "2030", color: "from-green-400 to-teal-400" }
            ].map((future, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-3xl font-extrabold bg-gradient-to-r ${future.color} text-transparent bg-clip-text mb-2`}>
                  {future.value}
                </div>
                <div className="text-gray-400 text-sm">{future.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;