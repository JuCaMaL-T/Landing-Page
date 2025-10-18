import type { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, X, CheckCircle, AlertCircle } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppointmentData {
  nombre: string;
  correo: string;
  telefono: string;
  fecha: string;
  hora: string;
  motivo: string;
}

const AppointmentModal: FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<AppointmentData>>({});
  
  const [formData, setFormData] = useState<AppointmentData>({
    nombre: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: '',
    motivo: ''
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<AppointmentData> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
    if (!formData.fecha) newErrors.fecha = 'La fecha es requerida';
    if (!formData.hora) newErrors.hora = 'La hora es requerida';
    if (!formData.motivo.trim()) newErrors.motivo = 'El motivo es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof AppointmentData, value: string) => {
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
      const response = await fetch('https://formspree.io/f/xqayblda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'Cita Agendada',
          nombre: formData.nombre,
          email: formData.correo,
          telefono: formData.telefono,
          fecha: formData.fecha,
          hora: formData.hora,
          motivo: formData.motivo,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          fecha: '',
          hora: '',
          motivo: ''
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

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
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
                    <Calendar className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Agendar Cita
                  </h2>
                  <p className="text-gray-300">
                    Completa el formulario y confirmaremos tu cita por correo
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        <Calendar className="inline w-4 h-4 mr-2" />
                        FECHA *
                      </label>
                      <input
                        type="date"
                        name="fecha"
                        value={formData.fecha}
                        onChange={(e) => handleChange('fecha', e.target.value)}
                        min={getMinDate()}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                          errors.fecha ? 'border-red-500' : 'border-gray-600'
                        } rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors`}
                      />
                      {errors.fecha && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.fecha}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3">
                        <Clock className="inline w-4 h-4 mr-2" />
                        HORA *
                      </label>
                      <select
                        name="hora"
                        value={formData.hora}
                        onChange={(e) => handleChange('hora', e.target.value)}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                          errors.hora ? 'border-red-500' : 'border-gray-600'
                        } rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors`}
                      >
                        <option value="">Selecciona una hora</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                      {errors.hora && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.hora}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      MOTIVO DE LA CITA *
                    </label>
                    <textarea
                      name="motivo"
                      value={formData.motivo}
                      onChange={(e) => handleChange('motivo', e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-4 bg-gray-800/50 border-2 ${
                        errors.motivo ? 'border-red-500' : 'border-gray-600'
                      } rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      placeholder="Describe brevemente el motivo de tu visita..."
                    />
                    {errors.motivo && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.motivo}
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
                          <span>Agendando...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>CONFIRMAR CITA</span>
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
                      <span>¡Cita agendada! Recibirás una confirmación por correo.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center gap-2 text-red-400 justify-center"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Error al agendar. Por favor, intenta de nuevo.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;