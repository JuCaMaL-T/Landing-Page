import type { FC } from "react";
import { motion } from "framer-motion";
import { milestones } from "../../data/about/AboutData";
import TimelineItem from "../ui/TimelineItem";
import { Clock } from "lucide-react";

const Timeline: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto relative z-10">
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
          {milestones.map((milestone, i) => (
            <TimelineItem key={i} milestone={milestone} index={i} />
          ))}
        </motion.div>
      </div>


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