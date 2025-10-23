import type { Variants } from "framer-motion";

export const textVariant: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { 
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    },
  }),
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    } 
  },
};


export const simplifiedVariants: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
};


export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};