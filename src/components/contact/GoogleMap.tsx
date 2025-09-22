import type { FC } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { contactInfo } from "../../data/contact/ContactData";

const GoogleMap: FC = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8987!2d-72.4989!3d7.8890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2743d8c8f24b47%3A0x12345!2sCalle%207%20N%20%2310E-25%2C%20C%C3%BAcuta%2C%20Norte%20de%20Santander!5e0!3m2!1ses!2sco!4v1234567890!5m2!1ses!2sco`;
  
  const mapUrlWithQuery = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Calle+7+N+10E-25,+Cúcuta,+Norte+de+Santander,+Colombia&zoom=15&maptype=roadmap`;

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-48 h-48 bg-gradient-to-br from-green-500/8 to-teal-500/8 rounded-full blur-3xl"
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
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text">
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
            <div className="space-y-6">
              <motion.div
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-green-500/20 hover:from-blue-500/30 hover:via-cyan-500/30 hover:to-green-500/30 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
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
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-green-500/20 via-teal-500/20 to-cyan-500/20 hover:from-green-500/30 hover:via-teal-500/30 hover:to-cyan-500/30 transition-all duration-500"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500">
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
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 hover:from-purple-500/30 hover:via-pink-500/30 hover:to-red-500/30 transition-all duration-500"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">Teléfonos</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {contactInfo.phones.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone}`}
                          className="block text-gray-300 hover:text-purple-400 transition-colors font-medium"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(contactInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Obtener Direcciones</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-green-500/30 h-full min-h-[500px]">
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
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
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
                      <p className="text-white text-xs">📍 Mapa interactivo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            ¿Necesitas{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
              Reunirte
            </span>{" "}
            con Nosotros?
          </h3>
          
          <p className="text-gray-300 mb-6">
            Agenda una cita previa para garantizar que podamos dedicarte todo nuestro tiempo 
            y atención. Nuestras oficinas están diseñadas para hacer de tu visita una experiencia cómoda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:scale-105 transition-transform">
              📅 Agendar Cita
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
              🚗 Ver Transporte Público
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GoogleMap;