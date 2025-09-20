import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  nombre: string;
  correo: string;
  numero: string;
  asunto: string;
  mensaje: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    numero: '',
    asunto: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.correo.trim()) newErrors.correo = 'El correo es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
    }
    if (!formData.numero.trim()) newErrors.numero = 'El número es requerido';
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es requerido';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ nombre: '', correo: '', numero: '', asunto: '', mensaje: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-20 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-16 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
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
          className="flex items-center justify-center gap-3 mb-8 px-5 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/40 mx-auto w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MessageSquare className="w-5 h-5 text-green-400" />
          <span className="text-green-400 text-sm font-medium uppercase">
            Envíanos Tu Consulta
          </span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Cuéntanos Sobre Tu{" "}
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
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
          className="relative p-[2px] rounded-3xl bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg rounded-3xl p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
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
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                      className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                        errors.nombre ? 'border-red-500' : 'border-gray-600'
                      } rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                      placeholder="Tu nombre completo"
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
                      value={formData.correo}
                      onChange={(e) => handleChange('correo', e.target.value)}
                      className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                        errors.correo ? 'border-red-500' : 'border-gray-600'
                      } rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                      placeholder="tu@email.com"
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
                      value={formData.numero}
                      onChange={(e) => handleChange('numero', e.target.value)}
                      className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                        errors.numero ? 'border-red-500' : 'border-gray-600'
                      } rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                      placeholder="+57 300 123 4567"
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
                      value={formData.asunto}
                      onChange={(e) => handleChange('asunto', e.target.value)}
                      className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                        errors.asunto ? 'border-red-500' : 'border-gray-600'
                      } rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                      placeholder="¿En qué podemos ayudarte?"
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
                    value={formData.mensaje}
                    onChange={(e) => handleChange('mensaje', e.target.value)}
                    rows={6}
                    className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                      errors.mensaje ? 'border-red-500' : 'border-gray-600'
                    } rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none`}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos, presupuesto aproximado y cualquier detalle que consideres importante..."
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
                      : 'bg-gradient-to-r from-green-600 to-blue-600 hover:scale-105 hover:shadow-green-500/40'
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
                    className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl flex items-center gap-2 text-green-400 justify-center"
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
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Consulta gratuita</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>100% confidencial</span>
                  </div>
                </div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;