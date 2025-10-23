import React, { useState, useEffect } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../ui/Card";
import { ArrowRight } from "lucide-react";
import { containerVariants, itemVariants } from "./Variants";

const SoftwareLaunch: FC = () => {
  const images = ["/services/photos/SaaS1_FS.webp", "/services/photos/SaaS2_FS.webp", "/services/photos/SaaS3_FS.webp", "/services/photos/SaaS4_FS.webp", "/services/photos/SaaS5_FS.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % images.length;
        setLoadedImages((prev) => new Set([...prev, next, (next + 1) % images.length]));
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.section
      className="w-full h-auto text-white p-6 pb-16 sm:rounded-2xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex items-center justify-center border border-gray-600 rounded-2xl relative overflow-hidden aspect-video order-first lg:order-none"
          variants={itemVariants}
        >
          <span className="absolute top-3 left-3 sm:top-5 sm:left-5 border-t-2 border-l-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-tl-lg"></span>
          <span className="absolute top-3 right-3 sm:top-5 sm:right-5 border-t-2 border-r-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-tr-lg"></span>
          <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 border-b-2 border-l-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-bl-lg"></span>
          <span className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 border-b-2 border-r-2 border-gray-400 w-6 h-6 sm:w-10 sm:h-10 rounded-br-lg"></span>

          <AnimatePresence mode="sync">
            {images.map((img, idx) => (
              loadedImages.has(idx) && (
                <motion.img
                  key={idx}
                  src={img}
                  alt="Vista previa del software"
                  className="w-full h-full object-cover rounded-2xl absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
            <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text text-transparent animate-gradient-x">
              Nuestro Lanzamiento
            </span>{" "}
            Más Reciente
          </h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            <strong>Plataforma Jucamal 2.0</strong> es un sistema SaaS para la gestión administrativa y operativa en empresas de construcción. Permite manejar usuarios, roles, recibos y alquiler de maquinaria desde una plataforma moderna, segura y fácil de usar.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
            variants={containerVariants}
          >
            {React.Children.map(
              [
                <Card
                  cardIcon="/services/icons/7.png"
                  imageAlt="Experiencia Ágil"
                  imageClassName="w-20 h-20 object-contain"
                  title="Experiencia Ágil"
                  description="Interfaz moderna y rápida, pensada para optimizar tu flujo de trabajo."
                />,
                <Card
                  cardIcon="/services/icons/8.png"
                  imageAlt="Gestión Modular"
                  imageClassName="w-20 h-20 object-contain"
                  title="Gestión Modular"
                  description="Administra usuarios, roles y maquinaria en módulos simples y eficientes."
                />,
                <Card
                  cardIcon="/services/icons/9.png"
                  imageAlt="Sistematización"
                  imageClassName="w-20 h-20 object-contain"
                  title="Sistematización"
                  description="Automatiza tareas clave y reduce el tiempo en procesos administrativos."
                />,
                <Card
                  cardIcon="/services/icons/10.png"
                  imageAlt="Seguridad Avanzada"
                  imageClassName="w-20 h-20 object-contain"
                  title="Seguridad Avanzada"
                  description="Datos protegidos con acceso seguro y cifrado de nivel empresarial."
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
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-gray-500 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 text-white font-semibold transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 group/btn overflow-hidden sm:text-base"
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