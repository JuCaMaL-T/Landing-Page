import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";

export const contactInfo = {
  address: {
    street: "Calle 7 N # 10E-25, Segundo piso",
    building: "Edf Fatima II, Barrio Santa Lucía",
    city: "Cúcuta 540003, Norte de Santander",
    country: "Colombia",
    full: "Calle 7 N # 10E-25, Segundo piso Edf Fatima II, Barrio Santa Lucía, Cúcuta 540003, Norte de Santander"
  },
  phones: [
    "+57 322-2573-306",
    "+57 310-6983-769"
  ],
  emails: [
    "directoradministrativo@jucamal.com",
    "gerencia@jucamal.com"
  ],
  schedule: {
    weekdays: "Lun - Vie: 8:00 am - 5:00 pm",
    saturday: "Sáb: 8:00 am - 12:00 m",
    sunday: "Domingo: Cerrado"
  },
  coordinates: {
    lat: 7.8890,
    lng: -72.4967
  }
};

export const contactMethods = [
  {
    icon: MessageCircle,
    title: "Chat en Vivo",
    description: "Conversa con nosotros ahora mismo",
    action: "Iniciar Chat",
    color: "from-green-500 to-emerald-500",
    available: "24/7",
    response: "Inmediata"
  },
  {
    icon: Phone,
    title: "Llamada Directa",
    description: "Habla directamente con nuestro equipo",
    action: "Llamar Ahora",
    color: "from-blue-500 to-cyan-500",
    available: "Lun-Vie 8am-5pm",
    response: "Inmediata"
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    description: "Envíanos tu consulta detallada",
    action: "Escribir Email",
    color: "from-purple-500 to-pink-500",
    available: "24/7",
    response: "24 horas"
  },
  {
    icon: Calendar,
    title: "Agenda una Cita",
    description: "Reserva tu consulta personalizada",
    action: "Programar",
    color: "from-orange-500 to-red-500",
    available: "Lun-Vie 8am-5pm",
    response: "Confirmación inmediata"
  }
];

export const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer: "El tiempo varía según la complejidad. Proyectos simples toman 2-4 semanas, mientras que soluciones empresariales pueden tomar 2-6 meses. Te damos un cronograma detallado después de la consulta inicial."
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer: "Sí, ofrecemos soporte 24/7 y mantenimiento continuo. Incluimos garantía de 6 meses y planes de soporte personalizados según tus necesidades."
  },
  {
    question: "¿Trabajan con empresas internacionales?",
    answer: "Absolutamente. Trabajamos con clientes en toda Latinoamérica y tenemos experiencia manejando proyectos remotos con equipos distribuidos globalmente."
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer: "Utilizamos tecnologías modernas como React, Astro, Python, AWS, y las últimas herramientas de IA. Seleccionamos la stack tecnológica ideal para cada proyecto."
  },
  {
    question: "¿Proporcionan cotizaciones gratuitas?",
    answer: "Sí, ofrecemos consultas y cotizaciones completamente gratuitas. Analizamos tu proyecto y te damos una propuesta detallada sin compromiso."
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "#",
    icon: "linkedin",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "Twitter",
    url: "#",
    icon: "twitter", 
    color: "from-sky-400 to-sky-600"
  },
  {
    name: "Instagram",
    url: "#",
    icon: "instagram",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "GitHub",
    url: "#",
    icon: "github",
    color: "from-gray-700 to-gray-900"
  }
];