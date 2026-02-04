// src/presentation/components/product/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/domain/entities';
import { Badge } from '../ui/Badge';
import { formatCurrency, calculateDiscount } from '@/presentation/utils/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const discount = hasDiscount ? calculateDiscount(product.price, product.discountPrice!) : 0;

  return (
    <Link href={`/productos/${product.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isNew && (
            <Badge className="absolute top-2 left-2" variant="success">
              Nuevo
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="absolute top-2 right-2" variant="danger">
              -{discount}%
            </Badge>
          )}
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.category.name}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-green-600">
                  {formatCurrency(product.discountPrice!)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(product.price)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>

          {product.stock < 10 && product.stock > 0 && (
            <p className="text-xs text-orange-600 mt-2">
              ¡Solo quedan {product.stock} unidades!
            </p>
          )}
          {product.stock === 0 && (
            <p className="text-xs text-red-600 mt-2">Agotado</p>
          )}
        </div>
      </div>
    </Link>
  );
}