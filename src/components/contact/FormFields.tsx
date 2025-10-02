import type { FC } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import type { FormData } from "../hooks/useContactForm";

interface FormFieldsProps {
  formData: FormData;
  errors: Partial<FormData>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  onSubmit: (e: React.FormEvent) => void;
  onChange: (field: keyof FormData, value: string) => void;
}

const FormFields: FC<FormFieldsProps> = ({
  formData,
  errors,
  isSubmitting,
  submitStatus,
  onSubmit,
  onChange
}) => {
  return (
    <form 
      onSubmit={onSubmit} 
      action="https://formspree.io/f/xwprbkeg" 
      method="POST"
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block text-white font-semibold mb-3">
            <User className="inline w-4 h-4 mr-2" />
            NOMBRE *
          </label>
          <div className="relative">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={(e) => onChange('nombre', e.target.value)}
              className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                errors.nombre ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
              placeholder="Tu nombre completo"
              required
            />
            {errors.nombre && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.nombre}
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label className="block text-white font-semibold mb-3">
            <Mail className="inline w-4 h-4 mr-2" />
            CORREO *
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.correo}
              onChange={(e) => onChange('correo', e.target.value)}
              className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                errors.correo ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
              placeholder="tu@email.com"
              required
            />
            {errors.correo && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.correo}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label className="block text-white font-semibold mb-3">
            <Phone className="inline w-4 h-4 mr-2" />
            NÚMERO *
          </label>
          <div className="relative">
            <input
              type="tel"
              name="numero"
              value={formData.numero}
              onChange={(e) => onChange('numero', e.target.value)}
              className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                errors.numero ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
              placeholder="+57 300 123 4567"
              required
            />
            {errors.numero && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.numero}
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label className="block text-white font-semibold mb-3">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            ASUNTO *
          </label>
          <div className="relative">
            <input
              type="text"
              name="asunto"
              value={formData.asunto}
              onChange={(e) => onChange('asunto', e.target.value)}
              className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                errors.asunto ? 'border-red-500' : 'border-gray-600'
              } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
              placeholder="¿En qué podemos ayudarte?"
              required
            />
            {errors.asunto && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.asunto}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label className="block text-white font-semibold mb-3">
          <MessageSquare className="inline w-4 h-4 mr-2" />
          MENSAJE *
        </label>
        <div className="relative">
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={(e) => onChange('mensaje', e.target.value)}
            rows={6}
            className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
              errors.mensaje ? 'border-red-500' : 'border-gray-600'
            } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none`}
            placeholder="Cuéntanos sobre tu proyecto, objetivos, presupuesto aproximado y cualquier detalle que consideres importante..."
            required
          />
          {errors.mensaje && (
            <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.mensaje}
            </p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="text-center pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group flex items-center justify-center gap-3 px-12 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-blue-900 hover:scale-105 hover:shadow-blue-500/40'
          } text-white mx-auto`}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>ENVIAR</span>
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center gap-2 text-blue-400 justify-center"
          >
            <CheckCircle className="w-5 h-5" />
            <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-2 text-red-400 justify-center"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Error al enviar el mensaje. Por favor, intenta de nuevo.</span>
          </motion.div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Respuesta en 24h</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Consulta gratuita</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
            <span>100% confidencial</span>
          </div>
        </div>
      </motion.div>
    </form>
  );
};

export default FormFields;