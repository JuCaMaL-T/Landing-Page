import type { FC } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { servicesData } from "../../data/services/OurServicesData";

const ServicesGrid: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm tracking-widest text-blue-400 uppercase mb-5">
          Servicios Especializados
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Transformamos Tu{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Negocio
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar 
          el crecimiento y la innovación en tu empresa.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10"
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
        {servicesData.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/20 via-slate-700/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-700/30 shadow-xl hover:shadow-blue-500/20 transition-all duration-500"
          >
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 transform transition-transform duration-300 group-hover:-translate-y-1">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-xs text-blue-400 font-medium px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30">
                    Popular
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-blue-400 mb-3">Incluye:</p>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn">
                  <span>Más Información</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesGrid;