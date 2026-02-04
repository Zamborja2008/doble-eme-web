// src/presentation/utils/whatsapp.ts
import { Product } from '@/domain/entities';

interface WhatsAppMessageParams {
  product: Product;
  quantity?: number;
}

export function generateWhatsAppLink({ product, quantity = 1 }: WhatsAppMessageParams): string {
  const phoneNumber = '5191204748'; // Cambia por tu número (código país + número sin +)
  
  const message = `Hola! Me interesa este producto:

📦 *${product.name}*
💰 Precio: S/ ${formatPrice(product.discountPrice || product.price)}
📊 Cantidad: ${quantity}

¿Está disponible?`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function formatPrice(price: number): string {
  return price.toFixed(2);
}