import { useState, useEffect } from 'react';
import { Factory } from 'lucide-react';

export default function FactoryFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const factoryUrl = 'https://jucamal.com/';

  useEffect(() => {
    const tooltipClosed = sessionStorage.getItem('factory-tooltip-closed');
    
    if (!tooltipClosed) {
      setShowTooltip(true);
      
      const timer = setTimeout(() => {
        setShowTooltip(false);
        sessionStorage.setItem('factory-tooltip-closed', 'true');
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    window.open(factoryUrl, '_blank');
  };

  const closeTooltip = () => {
    setShowTooltip(false);
    sessionStorage.setItem('factory-tooltip-closed', 'true');
  };

  return (
    <>
      <div className="fixed bottom-28 right-6 z-50 flex items-center gap-3">
        {showTooltip && (
          <div className="hidden sm:flex items-center bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-lg shadow-2xl shadow-blue-500/20 p-4 max-w-xs animate-[slideInFactory_0.5s_ease-out]">
            <div className="flex-1">
              <p className="text-sm font-semibold text-white mb-1">
                Visita Jucamal Ingeniería
              </p>
              <p className="text-xs text-gray-300">
                Conoce nuestra empresa de construcción
              </p>
            </div>
            <button
              onClick={closeTooltip}
              className="ml-2 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Cerrar mensaje"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
          aria-label="Visitar Jucamal"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          
          <Factory className="w-8 h-8 relative z-10" strokeWidth={2} />

          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-300 rounded-full border-2 border-white animate-pulse" />
        </button>
      </div>

      <style>{`
        @keyframes slideInFactory {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}