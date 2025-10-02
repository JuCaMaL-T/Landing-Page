import { Brain, Smartphone, Globe, Cpu, Shield, Headphones } from "lucide-react";

export const servicesData = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Implementamos soluciones de IA personalizadas que automatizan procesos y mejoran la toma de decisiones empresariales.",
    features: ["Machine Learning", "Procesamiento de Lenguaje Natural", "Visión por Computadora", "Análisis Predictivo"],
    images: [
      "/images/services/ia-1.jpg",
      "/images/services/ia-2.jpg",
      "/images/services/ia-3.jpg"
    ]
  },
  {
    icon: Globe,
    title: "Desarrollo de Software",
    description: "Creamos aplicaciones web y de escritorio robustas, escalables y optimizadas para tu negocio específico.",
    features: ["Aplicaciones Web", "Sistemas ERP", "APIs Personalizadas", "Integración de Sistemas"],
    images: [
      "/images/services/software-1.jpg",
      "/images/services/software-2.jpg",
      "/images/services/software-3.jpg"
    ]
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.",
    features: ["Apps Nativas", "Apps Híbridas", "UI/UX Design", "Publicación en Stores"],
    images: [
      "/images/services/mobile-1.jpg",
      "/images/services/mobile-2.jpg",
      "/images/services/mobile-3.jpg"
    ]
  },
  {
    icon: Cpu,
    title: "Consultoría Tech",
    description: "Asesoramos en la transformación digital de tu empresa con estrategias tecnológicas efectivas.",
    features: ["Auditoría Tecnológica", "Estrategia Digital", "Optimización de Procesos", "Plan de Implementación"],
    images: [
      "/images/services/consultoria-1.jpg",
      "/images/services/consultoria-2.jpg",
      "/images/services/consultoria-3.jpg"
    ]
  },
  {
    icon: Shield,
    title: "Automatización",
    description: "Automatizamos procesos repetitivos para aumentar la eficiencia y reducir costos operativos.",
    features: ["RPA", "Workflows Automáticos", "Integración de APIs", "Monitoreo Inteligente"],
    images: [
      "/images/services/automatizacion-1.jpg",
      "/images/services/automatizacion-2.jpg",
      "/images/services/automatizacion-3.jpg"
    ]
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Brindamos soporte técnico continuo para garantizar el funcionamiento óptimo de tus sistemas.",
    features: ["Monitoreo Continuo", "Mantenimiento Preventivo", "Soporte Remoto", "Actualizaciones"],
    images: [
      "/images/services/soporte-1.jpg",
      "/images/services/soporte-2.jpg",
      "/images/services/soporte-3.jpg"
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Análisis",
    description: "Evaluamos tus necesidades y objetivos empresariales para diseñar la solución perfecta.",
    duration: "1-2 semanas"
  },
  {
    step: "02", 
    title: "Diseño",
    description: "Creamos prototipos y arquitecturas técnicas que se alineen con tu visión empresarial.",
    duration: "2-3 semanas"
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Implementamos la solución utilizando las mejores prácticas y tecnologías actuales.",
    duration: "4-12 semanas"
  },
  {
    step: "04",
    title: "Implementación",
    description: "Desplegamos la solución en tu entorno y capacitamos a tu equipo para su uso.",
    duration: "1-2 semanas"
  }
];