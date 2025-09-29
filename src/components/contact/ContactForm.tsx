import type { FC } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";
import FormFields from "./FormFields";

const ContactForm: FC = () => {
  const { formData, errors, isSubmitting, submitStatus, handleSubmit, handleChange } = useContactForm();

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-16 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-blue-900/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-900/20 border border-blue-400/40 mx-auto w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MessageSquare className="w-5 h-5 text-blue-400" />
          <span className="text-blue-400 text-sm font-medium uppercase">
            Envíanos Tu Consulta
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Cuéntanos Sobre Tu{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-transparent bg-clip-text">
            Proyecto
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Completa el formulario y te contactaremos en menos de 24 horas con una propuesta 
          personalizada para tu proyecto.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="relative p-[2px] rounded-3xl bg-gradient-to-br from-blue-500/20 via-blue-700/20 to-blue-900/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-3xl p-8 sm:p-12">
            <FormFields
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
