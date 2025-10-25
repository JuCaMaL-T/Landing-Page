import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  return prefersReducedMotion;
}

export function getMotionVariants(shouldReduce: boolean) {
  if (shouldReduce) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.2 }
    };
  }
  
  return undefined;
}