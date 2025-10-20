import type { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, User, Mail, Phone, MessageSquare, X, CheckCircle, AlertCircle, Send } from "lucide-react";

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuestionData {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  pregunta: string;
}

const QuestionModal: FC<QuestionModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<QuestionData>>({});
  
  const [formData, setFormData] = useState<QuestionData>({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: '',
    pregunta: ''
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<QuestionData> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
    if (!formData.asunto.trim()) newErrors.asunto = 'El asunto es requerido';
    if (!formData.pregunta.trim()) newErrors.pregunta = 'La pregunta es requerida';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof QuestionData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/mvgwvelq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'Nueva Pregunta FAQ',
          nombre: formData.nombre,
          email: formData.correo,
          telefono: formData.telefono,
          asunto: formData.asunto,
          mensaje: formData.pregunta,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          asunto: '',
          pregunta: ''
        });
        setErrors({});
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-xl rounded-3xl border border-blue-500/20 shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/30 mb-4">
                    <HelpCircle className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Hacer Una Pregunta
                  </h2>
                  <p className="text-gray-300">
                    Nuestro equipo te responderá en menos de 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        <User className="inline w-4 h-4 mr-2" />
                        NOMBRE COMPLETO *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                          errors.nombre ? 'border-red-500' : 'border-gray-600'
                        } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                        placeholder="Tu nombre completo"
                      />
                      {errors.nombre && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">
                        <Mail className="inline w-4 h-4 mr-2" />
                        CORREO *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.correo}
                        onChange={(e) => handleChange('correo', e.target.value)}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                          errors.correo ? 'border-red-500' : 'border-gray-600'
                        } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                        placeholder="tu@email.com"
                      />
                      {errors.correo && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.correo}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        <Phone className="inline w-4 h-4 mr-2" />
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                          errors.telefono ? 'border-red-500' : 'border-gray-600'
                        } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                        placeholder="+57 300 123 4567"
                      />
                      {errors.telefono && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.telefono}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">
                        <MessageSquare className="inline w-4 h-4 mr-2" />
                        ASUNTO *
                      </label>
                      <input
                        type="text"
                        name="asunto"
                        value={formData.asunto}
                        onChange={(e) => handleChange('asunto', e.target.value)}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                          errors.asunto ? 'border-red-500' : 'border-gray-600'
                        } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                        placeholder="¿Sobre qué es tu pregunta?"
                      />
                      {errors.asunto && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.asunto}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      TU PREGUNTA *
                    </label>
                    <textarea
                      name="pregunta"
                      value={formData.pregunta}
                      onChange={(e) => handleChange('pregunta', e.target.value)}
                      rows={5}
                      className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                        errors.pregunta ? 'border-red-500' : 'border-gray-600'
                      } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      placeholder="Escribe tu pregunta con el mayor detalle posible..."
                    />
                    {errors.pregunta && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.pregunta}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-500 to-blue-900 hover:scale-[1.02] hover:shadow-blue-500/40'
                      } text-white`}
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
                          <Send className="w-5 h-5" />
                          <span>ENVIAR PREGUNTA</span>
                        </>
                      )}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center gap-2 text-blue-400 justify-center"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>¡Pregunta enviada! Te responderemos pronto por correo.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-2 text-red-400 justify-center"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Error al enviar. Por favor, intenta de nuevo.</span>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
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
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuestionModal;