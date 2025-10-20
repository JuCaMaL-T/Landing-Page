import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import { servicesData } from "../../data/services/OurServicesData";

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [loadedIcons, setLoadedIcons] = useState<Set<number>>(new Set());
  const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadedIcons(new Set(servicesData.map((_, i) => i)));
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const loadModalImages = (serviceIndex: number) => {
    const service = servicesData[serviceIndex];
    if (service.images) {
      setLoadedModalImages(new Set(service.images));
    }
  };

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative bg-slate-950 min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-full blur-xl"
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
        <p className="text-sm tracking-widest text-blue-500 uppercase mb-5">
          Servicios Especializados
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Transformamos Tu{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
            Negocio
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar 
          el crecimiento y la innovación en tu empresa.
        </p>
      </motion.div>

      <motion.div
        ref={gridRef}
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
            className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-blue-500/20 via-slate-700/20 to-blue-900/20 hover:from-blue-600/30 hover:to-blue-900/30 shadow-xl hover:shadow-blue-500/20 transition-all duration-500"
          >
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/30 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {loadedIcons.has(i) && (
                      <img 
                        src={service.iconImage} 
                        alt={`${service.title} icon`}
                        className="w-18 h-18 object-contain"
                      />
                    )}
                  </div>
                  <span className="text-xs text-blue-500 font-medium px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
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
                  <p className="text-sm font-semibold text-blue-500 mb-3">Incluye:</p>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    setSelectedService(i);
                    loadModalImages(i);
                  }}
                  className="relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 text-white font-semibold transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10">Más Información</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedService !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setSelectedService(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-xl rounded-3xl border border-blue-500/20 shadow-2xl">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="flex flex-col">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/30 w-fit mb-6">
                      {loadedIcons.has(selectedService) && (
                        <img 
                          src={servicesData[selectedService].iconImage} 
                          alt={`${servicesData[selectedService].title} icon`}
                          className="w-20 h-20 object-contain"
                        />
                      )}
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {servicesData[selectedService].title}
                    </h2>

                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {servicesData[selectedService].description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <p className="text-base font-semibold text-blue-500 mb-4">
                        Incluye:
                      </p>
                      {servicesData[selectedService].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      className="mt-auto w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-800 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 group"
                    >
                      <span>Pedir Servicio</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="flex flex-col gap-4">
                    {servicesData[selectedService].images?.map((imageSrc, index) => (
                      <div 
                        key={index}
                        className="relative h-54 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-900/10 border border-blue-500/20 overflow-hidden group/img"
                      >
                        {loadedModalImages.has(imageSrc) && (
                          <>
                            <img 
                              src={imageSrc} 
                              alt={`${servicesData[selectedService].title} - Imagen ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                (e.currentTarget.nextElementSibling as HTMLElement | null)?.style.setProperty("display", "flex");
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                          </>
                        )}
                        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-900/10">
                          <span className="text-gray-500 text-sm">Imagen {index + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGrid;