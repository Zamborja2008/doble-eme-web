import { Promotion } from '@/domain/entities';
import { PromotionCard } from './PromotionCard';

interface PromotionsListProps {
  promotions: Promotion[];
}

export function PromotionsList({ promotions }: PromotionsListProps) {
  if (promotions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay promociones disponibles en este momento</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
}