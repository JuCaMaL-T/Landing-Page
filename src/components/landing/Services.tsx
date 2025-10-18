import type { FC } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { services } from "../../data/landing/ServicesData";

const Services: FC = () => {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 py-16 sm:py-18 md:py-20 lg:py-20">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12 md:mb-16 lg:mb-16 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Tu Crecimiento, Nuestra Meta
        </h2>

        <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Usamos herramientas para transformar y potenciar tu negocio.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 xl:gap-10 max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
          >
            <Card {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;