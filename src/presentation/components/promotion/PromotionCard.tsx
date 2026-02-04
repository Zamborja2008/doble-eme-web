import Image from 'next/image';
import { Promotion } from '@/domain/entities';
import { formatDate } from '@/presentation/utils/format';
import { Calendar, Tag } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface PromotionCardProps {
  promotion: Promotion;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  const isActive = new Date(promotion.endDate) > new Date();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative aspect-video">
        <Image
          src={promotion.imageUrl}
          alt={promotion.title}
          fill
          className="object-cover"
        />
        {isActive && (
          <Badge className="absolute top-3 right-3" variant="success">
            Activa
          </Badge>
        )}
        {promotion.discountPercentage && (
          <div className="absolute top-3 left-3 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold leading-none">{promotion.discountPercentage}%</p>
              <p className="text-xs">OFF</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{promotion.title}</h3>
        <p className="text-gray-600 text-sm">{promotion.description}</p>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Hasta: {formatDate(promotion.endDate)}</span>
        </div>

        {promotion.products && promotion.products.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-green-600">
            <Tag className="w-4 h-4" />
            <span>{promotion.products.length} productos en promoción</span>
          </div>
        )}
      </div>
    </div>
  );
}