'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { SiteConfig } from '@/domain/entities';

interface HeaderProps {
  config: SiteConfig;
}

export function Header({ config }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${config.whatsappNumber}`, '_blank');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={config.logo}
              alt={config.siteName}
              width={150}
              height={60}
              className="w-auto"
              style={{ height: '48px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('promociones')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Promociones
            </button>
            <button
              onClick={() => scrollToSection('comentarios')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Comentarios
            </button>
          </nav>

          {/* Phone Contact */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">{config.phone}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('promociones')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                Promociones
              </button>
              <button
                onClick={() => scrollToSection('comentarios')}
                className="text-left text-gray-700 hover:text-green-600 font-medium py-2"
              >
                Comentarios
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{config.phone}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}