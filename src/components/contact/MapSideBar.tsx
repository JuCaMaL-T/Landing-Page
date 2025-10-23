import type { FC } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { contactInfo } from "../../data/contact/ContactData";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ContactInfoSidebar: FC = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const cardAnimation = shouldReduceMotion || isMobile
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.3 } }
    : {
        initial: { opacity: 0, x: -40 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6 }
      };

  const hoverProps = !isMobile && !shouldReduceMotion ? { whileHover: { y: -5 } } : {};

  return (
    <div className="space-y-6">
      <motion.div
        className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 hover:from-blue-500/30 hover:to-blue-900/30 transition-all duration-500"
        {...hoverProps}
        {...cardAnimation}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-900">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Dirección</h3>
            </div>
            
            <div className="space-y-2 text-gray-300">
              <p className="font-medium">{contactInfo.address.street}</p>
              <p>{contactInfo.address.building}</p>
              <p>{contactInfo.address.city}</p>
              <p className="text-blue-400 font-semibold">{contactInfo.address.country}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 hover:from-blue-500/30 hover:to-blue-900/30 transition-all duration-500"
        {...hoverProps}
        initial={cardAnimation.initial}
        whileInView={cardAnimation.whileInView}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ ...cardAnimation.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
      >
        <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-900">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Horarios</h3>
            </div>
            
            <div className="space-y-2 text-gray-300">
              <p>{contactInfo.schedule.weekdays}</p>
              <p>{contactInfo.schedule.saturday}</p>
              <p className="text-red-400">{contactInfo.schedule.sunday}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 hover:from-blue-500/30 hover:to-blue-900/30 transition-all duration-500"
        {...hoverProps}
        initial={cardAnimation.initial}
        whileInView={cardAnimation.whileInView}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ ...cardAnimation.transition, delay: shouldReduceMotion ? 0 : 0.2 }}
      >
        <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-900">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Teléfonos</h3>
            </div>
            
            <div className="space-y-2">
              {contactInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="block text-gray-300 hover:text-blue-400 transition-colors font-medium"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
      >
        <a
          href={`https://www.google.com/maps/dir//${encodeURIComponent(contactInfo.address.full)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
        >
          <Navigation className={`w-5 h-5 ${!shouldReduceMotion && 'group-hover:rotate-12'} transition-transform`} />
          <span>Obtener Direcciones</span>
        </a>
      </motion.div>
    </div>
  );
};

export default ContactInfoSidebar;