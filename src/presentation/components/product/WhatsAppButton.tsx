// src/presentation/components/product/WhatsAppButton.tsx
'use client';

import { MessageCircle } from 'lucide-react';
import { Product } from '@/domain/entities';
import { generateWhatsAppLink } from '@/presentation/utils/whatsapp';
import { Button } from '../ui/Button';
import { useState } from 'react';

interface WhatsAppButtonProps {
  product: Product;
}

export function WhatsAppButton({ product }: WhatsAppButtonProps) {
  const [quantity, setQuantity] = useState(1);

  const handleWhatsAppClick = () => {
    const link = generateWhatsAppLink({ product, quantity });
    window.open(link, '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="font-medium">
          Cantidad:
        </label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100"
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 text-center border border-gray-300 rounded-md px-2 py-1"
          />
          <button
            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            className="w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100"
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>

      <Button
        onClick={handleWhatsAppClick}
        disabled={product.stock === 0}
        size="lg"
        className="w-full"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {product.stock > 0 ? 'Pedir por WhatsApp' : 'Producto Agotado'}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Te redirigiremos a WhatsApp para completar tu pedido
      </p>
    </div>
  );
}