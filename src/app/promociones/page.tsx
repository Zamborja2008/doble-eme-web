import { getActivePromotions } from '@/application/promotions/getActivePromotions';
import { PromotionsList } from '@/presentation/components/promotion/PromotionsList';

export default async function PromotionsPage() {
  const promotions = await getActivePromotions();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Promociones Activas</h1>
      <PromotionsList promotions={promotions} />
    </div>
  );
}