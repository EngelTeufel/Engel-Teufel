import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Basis-Hintergrund */}
      <div className="absolute inset-0 bg-brand-dark"></div>

      {/* Goldene Welle oben */}
      <div 
        className="absolute w-full h-[300px] top-[20%]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(153, 123, 77, 0.3) 50%, transparent 100%)',
          clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)',
        }}
      />

      {/* Goldene Welle unten */}
      <div 
        className="absolute w-full h-[400px] bottom-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(153, 123, 77, 0.3) 50%, rgba(153, 123, 77, 0.1) 100%)',
          clipPath: 'polygon(0 30%, 100% 0%, 100% 100%, 0 100%)',
        }}
      />

      {/* Subtiler Noise-Overlay für Textur */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
