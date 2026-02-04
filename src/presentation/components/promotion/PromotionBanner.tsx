import Image from 'next/image';
import Link from 'next/link';
import { Promotion } from '@/domain/entities';
import { formatDate } from '@/presentation/utils/format';
import { Calendar, Percent } from 'lucide-react';

interface PromotionBannerProps {
  promotion: Promotion;
}

export function PromotionBanner({ promotion }: PromotionBannerProps) {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-700 rounded-lg overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
        {/* Contenido */}
        <div className="flex flex-col justify-center text-white space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 w-fit">
            <Percent className="w-4 h-4" />
            <span className="text-sm font-medium">Promoción Activa</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">{promotion.title}</h2>
          <p className="text-lg text-green-50">{promotion.description}</p>
          
          {promotion.discountPercentage && (
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold">{promotion.discountPercentage}%</span>
              <span className="text-xl">de descuento</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-green-100">
            <Calendar className="w-4 h-4" />
            <span>
              Válido hasta: {formatDate(promotion.endDate)}
            </span>
          </div>

          <Link
            href="/promociones"
            className="inline-flex items-center justify-center bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors w-fit mt-2"
          >
            Ver productos en promoción
          </Link>
        </div>

        {/* Imagen */}
        <div className="relative h-64 md:h-full min-h-[250px]">
          <Image
            src={promotion.imageUrl}
            alt={promotion.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}