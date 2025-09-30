import type { FC } from "react";
import { motion } from "framer-motion";
import MapSideBar from "./MapSideBar";
import MapEmbed from "./MapEmbed";
import MapCTA from "./MapCTA";

const GoogleMap: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-3xl"
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
        <p className="text-sm tracking-widest text-blue-400 uppercase mb-5">
          Nuestra Ubicación
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Visítanos en{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            Cúcuta
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Estamos ubicados en el corazón de Cúcuta, listos para recibirte y 
          hacer realidad tus proyectos tecnológicos.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <MapSideBar />
          </motion.div>

          <div className="lg:col-span-2">
            <MapEmbed />
          </div>
        </div>
      </div>

      <MapCTA />
    </section>
  );
};

export default GoogleMap;