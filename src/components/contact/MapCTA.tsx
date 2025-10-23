import type { FC } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useState, lazy, Suspense } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const AppointmentModal = lazy(() => import("./AppointmentModal"));

const MapCTA: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: "-50px" }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            ¿Necesitas{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
              Reunirte
            </span>{" "}
            con Nosotros?
          </h3>
          
          <p className="text-gray-300 mb-6">
            Agenda una cita previa para garantizar que podamos dedicarte todo nuestro tiempo 
            y atención. Nuestras oficinas están diseñadas para hacer de tu visita una experiencia cómoda.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 text-white font-medium hover:scale-105 transition-transform"
            >
              <Calendar className="w-5 h-5" />
              Agendar Cita
            </button>
          </div>
        </div>
      </motion.div>

      <Suspense fallback={null}>
        {isModalOpen && (
          <AppointmentModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </Suspense>
    </>
  );
};

export default MapCTA;