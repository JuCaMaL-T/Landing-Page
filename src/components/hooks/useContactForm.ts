import { useState } from "react";

export interface FormData {
  nombre: string;
  correo: string;
  numero: string;
  asunto: string;
  mensaje: string;
}

export const useContactForm = () => {
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
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/xwprbkeg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.correo,
          numero: formData.numero,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', correo: '', numero: '', asunto: '', mensaje: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar:', error);
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

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleSubmit,
    handleChange
  };
};