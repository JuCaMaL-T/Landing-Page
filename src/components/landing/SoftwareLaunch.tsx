import React from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { ArrowRight, Cpu, Rocket, Layers, Shield } from "lucide-react";
import { containerVariants, itemVariants } from "./Variants";

const SoftwareLaunch: FC = () => {
  return (
    <motion.section
      className="w-full min-h-screen text-white p-6 sm:p-10 rounded-2xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <motion.div
          className="flex items-center justify-center border border-gray-600 rounded-2xl min-h-[240px] sm:min-h-[360px] md:min-h-[480px] relative overflow-hidden"
          variants={itemVariants}
        >
          <span className="absolute top-3 left-3 sm:top-5 sm:left-5 border-t-2 border-l-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-tl-lg"></span>
          <span className="absolute top-3 right-3 sm:top-5 sm:right-5 border-t-2 border-r-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-tr-lg"></span>
          <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 border-b-2 border-l-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-bl-lg"></span>
          <span className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 border-b-2 border-r-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-br-lg"></span>

          <img
            src="/Logo.png"
            alt="Vista previa del software"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-400">
            Nuevo
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestro Lanzamiento
            </span>{" "}
            Más Reciente
          </h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Aquí ponemos una pequeña descripción del software de construcción
            (Hay que buscarle nombre, tiene que llamar la atención y llevar a la
            gente a que vea un demo de la plataforma y lo que puede hacer).
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
            variants={containerVariants}
          >
            {React.Children.map(
              [
                <Card
                  icon={<Rocket className="w-6 h-6 text-blue-400" />}
                  title="Rendimiento Óptimo"
                  description="Optimizado para brindar la mejor experiencia en proyectos grandes."
                />,
                <Card
                  icon={<Layers className="w-6 h-6 text-purple-400" />}
                  title="Gestión Modular"
                  description="Organiza los recursos de tu construcción en módulos fáciles de usar."
                />,
                <Card
                  icon={<Cpu className="w-6 h-6 text-green-400" />}
                  title="Automatización"
                  description="Automatiza procesos repetitivos para ahorrar tiempo y reducir errores."
                />,
                <Card
                  icon={<Shield className="w-6 h-6 text-red-400" />}
                  title="Seguridad Avanzada"
                  description="Protección de datos y acceso seguro con cifrado de última generación."
                />,
              ],
              (child, i) => (
                <motion.div key={i} variants={itemVariants}>
                  {child}
                </motion.div>
              )
            )}
          </motion.div>

          <motion.button
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-gray-500 hover:border-green-400 transition hover:bg-green-400 hover:text-black text-sm sm:text-base"
            variants={itemVariants}
          >
            Requerir Demo <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SoftwareLaunch;