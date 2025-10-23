import { useEffect, useRef, useState, type FC } from "react";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const OptimizedVideo: FC<OptimizedVideoProps> = ({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={videoRef} className={`relative ${className}`}>
      {poster && !isLoaded && (
        <img
          src={poster}
          alt="Video preview"
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}
      
      {shouldLoad && (
        <video
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="metadata"
          poster={poster}
          className={className}
          onLoadedData={handleLoadedData}
        >
          <source src={src} type="video/webm" />
          <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      )}
    </div>
  );
};

export default OptimizedVideo;