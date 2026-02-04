'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { SiteConfig } from '@/domain/entities';

interface HeroBannerProps {
  config: SiteConfig;
}

export function HeroBanner({ config }: HeroBannerProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${config.whatsappNumber}?text=Hola, Doble Eme! Me interesa realizar un pedido de kéfir`, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto a la IZQUIERDA */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Kéfir Natural
              <br />
              <span className="text-green-300">100% Artesanal</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
              Descubre el poder de los probióticos naturales. 
              Elaborado diariamente con ingredientes frescos y granos de kéfir auténticos 
              para cuidar tu salud intestinal de forma natural.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Hacer un Pedido
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById('productos');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all backdrop-blur-sm"
              >
                Ver Productos
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-green-100">Natural</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3">
                <p className="text-3xl font-bold">0</p>
                <p className="text-green-100">Conservantes</p>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-lg p-3">
                <p className="text-3xl font-bold">24h</p>
                <p className="text-green-100">Entrega</p>
              </div>
            </div>
          </div>

          {/* Espacio vacío a la DERECHA (donde están los kefir en la imagen) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 md:h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}