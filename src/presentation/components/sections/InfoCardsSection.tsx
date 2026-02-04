import * as Icons from 'lucide-react';
import { InfoCard } from '@/domain/entities';

interface InfoCardsSectionProps {
  cards: InfoCard[];
}

export function InfoCardsSection({ cards }: InfoCardsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => {
            // Obtener el componente de icono dinámicamente
            const IconComponent = Icons[card.icon as keyof typeof Icons] as any;

            return (
              <div
                key={card.id}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 group-hover:bg-green-600 transition-colors">
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}