'use client';

import Image from 'next/image';
import { MessageCircle, Calendar, Tag } from 'lucide-react';
import { Promotion } from '@/domain/entities';
import { formatDate } from '@/presentation/utils/format';

interface PromotionsSectionProps {
  promotions: Promotion[];
  whatsappNumber: string;
}

export function PromotionsSection({ promotions, whatsappNumber }: PromotionsSectionProps) {
  const handleWhatsAppClick = (promotion: Promotion) => {
    const message = `Hola! Me interesa conocer más sobre la promoción:

🎉 *${promotion.title}*
${promotion.discountPercentage ? `💰 ${promotion.discountPercentage}% de descuento` : ''}

¿Está vigente?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="promociones" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Promociones Especiales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas y descuentos exclusivos
          </p>
        </div>

        {/* Contenido */}
        {promotions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promotion) => (
              <div
                key={promotion.id}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={promotion.imageUrl}
                    alt={promotion.title}
                    fill
                    className="object-cover"
                  />

                  {promotion.discountPercentage && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <p className="text-2xl font-bold leading-none">
                          {promotion.discountPercentage}%
                        </p>
                        <p className="text-xs">OFF</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {promotion.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {promotion.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Válido hasta: {formatDate(promotion.endDate)}</span>
                  </div>

                  {promotion.products && promotion.products.length > 0 && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Tag className="w-4 h-4" />
                      <span>{promotion.products.length} productos en oferta</span>
                    </div>
                  )}

                  <button
                    onClick={() => handleWhatsAppClick(promotion)}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pedir Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Sin promociones
          <div className="max-w-2xl mx-auto text-center bg-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-300">
            <Tag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No hay promociones activas
            </h3>
            <p className="text-gray-500 mb-6">
              Por el momento no tenemos promociones disponibles, pero pronto tendremos ofertas especiales para ti.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent('Hola, Doble Eme! Me gustaría conocer cuando tengan nuevas promociones');
                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
              }}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Recibir Notificaciones
            </button>
          </div>
        )}
      </div>
    </section>
  );
}