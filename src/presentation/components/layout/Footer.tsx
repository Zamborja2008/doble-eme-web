'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';
import { SiteConfig } from '@/domain/entities';

interface FooterProps {
  config: SiteConfig;
}

export function Footer({ config }: FooterProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${config.whatsappNumber}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo e información */}
          <div className="space-y-4">
            <Image
              src={config.logo}
              alt={config.siteName}
              width={150}
              height={60}
              className="w-auto brightness-0 invert"
              style={{ height: '48px' }}
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Kéfir natural y artesanal elaborado diariamente con ingredientes frescos 
              para cuidar tu salud de forma natural.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-4">
              {config.social.facebook && (
                <a
                  href={config.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {config.social.instagram && (
                <a
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('productos')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('promociones')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Promociones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('comentarios')}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Comentarios
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Política de Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {config.phone}
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {config.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {config.siteName}. Todos los derechos reservados.
            </p>
            <p>
              Hecho con ❤️ en Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}