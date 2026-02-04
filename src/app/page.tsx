// src/app/page.tsx
import { getSiteConfig } from '@/application/config/getSiteConfig';
import { getHeroSlides } from '@/application/hero/getHeroSlides';
import { getInfoCards } from '@/application/info/getInfoCards';
import { getAllProducts } from '@/application/products/getAllProducts';
import { getActivePromotions } from '@/application/promotions/getActivePromotions';

import { Header } from '@/presentation/components/layout/Header';
import { Footer } from '@/presentation/components/layout/Footer';
import { HeroBanner } from '@/presentation/components/sections/HeroBanner';
import { HeroCarousel } from '@/presentation/components/sections/HeroCarousel';
import { InfoCardsSection } from '@/presentation/components/sections/InfoCardsSection';
import { ProductsSection } from '@/presentation/components/sections/ProductsSection';
import { PromotionsSection } from '@/presentation/components/sections/PromotionsSection';
import { TestimonialsSection } from '@/presentation/components/sections/TestimonialsSection';

export default async function HomePage() {
  // Cargar todos los datos en paralelo
  const [config, slides, infoCards, products, promotions] = await Promise.all([
    getSiteConfig(),
    getHeroSlides(),
    getInfoCards(),
    getAllProducts(),
    getActivePromotions(),
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header config={config} />

      {/* Contenido principal */}
      <main className="flex-grow">
        {/* Hero Banner con imagen y texto */}
        <HeroBanner config={config} />

        {/* Carrusel automático: ¿Qué es Kefir? / Beneficios */}
        <HeroCarousel slides={slides} />

        {/* Sección de iconos informativos */}
        <InfoCardsSection cards={infoCards} />

        {/* Sección de productos */}
        <ProductsSection 
          products={products} 
          whatsappNumber={config.whatsappNumber} 
        />

        {/* Sección de promociones */}
        <PromotionsSection 
          promotions={promotions} 
          whatsappNumber={config.whatsappNumber} 
        />

        {/* Sección de comentarios */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer config={config} />
    </div>
  );
}