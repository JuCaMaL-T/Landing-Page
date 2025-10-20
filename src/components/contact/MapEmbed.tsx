import type { FC } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MapEmbed: FC = () => {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-blue-500/30 to-blue-900/30 h-full min-h-[500px]">
        <div className="bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded-3xl overflow-hidden h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.4536979613314!2d-72.49242982348403!3d7.90534068613236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645d98bd1d5bb%3A0x6dbf116d3fa5fd1e!2sJucamal%20Ingenier%C3%ADa%20%26%20Construcciones!5e0!3m2!1ses!2sco!4v1758227092495!5m2!1ses!2sco"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl w-full h-full min-h-[730px]"
            title="Ubicación de JUCAMAL Tecnología"
          />
          
          <div className="absolute top-4 left-4 right-4">
            <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-900">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">JUCAMAL Tecnología</h4>
                  <p className="text-gray-300 text-xs">Barrio Santa Lucía, Cúcuta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="bg-black/80 backdrop-blur-lg rounded-xl px-3 py-2 border border-white/10">
              <p className="text-white text-xs">🗺️ Mapa interactivo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-900 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default MapEmbed;