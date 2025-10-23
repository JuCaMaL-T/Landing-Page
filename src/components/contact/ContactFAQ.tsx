import type { FC } from "react";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import FAQItem from "../ui/FAQItem";
import { faqs } from "../../data/contact/ContactData";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useReducedMotion } from "../hooks/useReducedMotion";

const QuestionModal = lazy(() => import("./QuestionModal"));

const ContactFAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showFloatingElements = !isMobile && !shouldReduceMotion;

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      
      {showFloatingElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-2xl"
            animate={{ scale: [1.3, 0.9, 1.3], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>
      )}

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: "-50px" }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <HelpCircle className="w-6 h-6 text-blue-400" />
          <p className="text-sm tracking-widest text-blue-400 uppercase">
            Preguntas Frecuentes
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Resolvemos Tus{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
            Dudas
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Estas son las preguntas que más nos hacen nuestros clientes. 
          Si no encuentras lo que buscas, no dudes en contactarnos directamente.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: shouldReduceMotion ? 0.05 : 0.1 },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
        >
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-blue-500/20 via-blue-700/20 to-blue-900/20">
            <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-3xl p-8">
              <div className="max-w-2xl mx-auto">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 flex items-center justify-center"
                  whileHover={!isMobile && !shouldReduceMotion ? { scale: 1.1, rotate: 10 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  ¿No Encontraste Tu{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
                    Respuesta
                  </span>
                  ?
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Nuestro equipo de expertos está listo para resolver cualquier duda específica 
                  sobre tu proyecto. No hay pregunta demasiado técnica o demasiado simple.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => setIsQuestionModalOpen(true)}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
                    whileHover={!isMobile && !shouldReduceMotion ? { y: -2 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Hacer Una Pregunta</span>
                  </motion.button>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-700/50">
                  {[
                    { value: "< 1h", label: "Tiempo de Respuesta" },
                    { value: "99%", label: "Problemas Resueltos" },
                    { value: "24/7", label: "Disponibilidad" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-extrabold text-blue-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Suspense fallback={null}>
        {isQuestionModalOpen && (
          <QuestionModal 
            isOpen={isQuestionModalOpen} 
            onClose={() => setIsQuestionModalOpen(false)} 
          />
        )}
      </Suspense>
    </section>
  );
};

export default ContactFAQ;