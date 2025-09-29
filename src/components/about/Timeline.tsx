import type { FC } from "react";
import { motion } from "framer-motion";
import { milestones } from "../../data/about/AboutData";
import TimelineItem from "../ui/TimelineItem";
import { Clock, Code, Zap, Rocket, Star, Sparkles } from "lucide-react";

const Timeline: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-blue-900/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-56 h-56 bg-gradient-to-br from-blue-500/20 to-blue-900/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 0.8, 1.2], 
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-1/4 right-1/3 w-32 h-32 border border-blue-500/30 rounded-lg"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 border-blue-700/40 rounded-full"
          animate={{ 
            rotate: [360, 0],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500/40 to-blue-900/40 rounded-full"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(30, 58, 138, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
          <motion.path
            d="M100,100 Q200,50 300,100 T500,100 Q600,150 700,100 T900,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M150,700 Q250,650 350,700 T550,700 Q650,750 750,700 T950,700"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#1E3A8A" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none z-5">
        {[
          { icon: Code, position: { top: '15%', left: '15%' }, delay: 0 },
          { icon: Zap, position: { top: '25%', right: '20%' }, delay: 1 },
          { icon: Rocket, position: { bottom: '40%', left: '10%' }, delay: 2 },
          { icon: Star, position: { top: '60%', right: '15%' }, delay: 1.5 },
          { icon: Sparkles, position: { bottom: '20%', right: '25%' }, delay: 0.5 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 6 + index, repeat: Infinity, delay: item.delay * 2 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-900/20 backdrop-blur-sm border border-blue-500/40 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-blue-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clock className="w-6 h-6 text-blue-400" />
          <p className="text-sm tracking-widest text-blue-400 uppercase">
            Nuestra Historia
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          El{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
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
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 transform -translate-x-1/2 hidden lg:block" />
        
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full hidden lg:block"
          animate={{ y: [0, 800] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ top: '0%' }}
        />

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {milestones.map((milestone, i) => (
            <div key={i} className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-700/40 rounded-full hidden lg:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500/40 to-blue-900/40 rounded-full hidden lg:block"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
              <TimelineItem milestone={milestone} index={i} />
            </div>
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-900/20 border border-blue-500/40 mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 font-medium">El Viaje Continúa...</span>
          </motion.div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Construyendo el{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
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
              { label: "Próximos Proyectos", value: "10+" },
              { label: "Nuevas Tecnologías", value: "5" },
              { label: "Visión", value: "2030" }
            ].map((future, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text mb-2">
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