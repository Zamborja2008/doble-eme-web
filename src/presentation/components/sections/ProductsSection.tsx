'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Product } from '@/domain/entities';
import { formatCurrency } from '@/presentation/utils/format';
import { Badge } from '../ui/Badge';

interface ProductsSectionProps {
  products: Product[];
  whatsappNumber: string;
}

export function ProductsSection({ products, whatsappNumber }: ProductsSectionProps) {
  const handleWhatsAppClick = (product: Product) => {
    const message = `Hola, Doble Eme! Me interesa hacer un pedido de:

📦 *${product.name}*
💰 Precio: ${formatCurrency(product.discountPrice || product.price)}

¿Está disponible?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos naturales, elaborados diariamente con los mejores ingredientes
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Imagen */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Texto "Imagen referencial" */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Imagen referencial
                  </div>

                {product.isNew && (
                  <Badge className="absolute top-3 left-3" variant="success">
                    Nuevo
                  </Badge>
                )}
                {product.discountPrice && product.discountPrice < product.price && (
                  <Badge className="absolute top-3 right-3 bg-red-600 text-white">
                    Oferta
                  </Badge>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                {/* Categoría */}
                <p className="text-sm text-green-600 font-medium uppercase tracking-wide">
                  {product.category.name}
                </p>

                {/* Nombre */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h3>

                {/* Descripción corta */}
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.shortDescription || product.description}
                </p>

                {/* Precio */}
                <div className="flex items-baseline gap-2">
                  {product.discountPrice && product.discountPrice < product.price ? (
                    <>
                      <span className="text-2xl font-bold text-green-600">
                        {formatCurrency(product.discountPrice)}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {formatCurrency(product.price)}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(product.price)}
                    </span>
                  )}
                </div>

                {/* Botón de pedido */}
                <button
                  onClick={() => handleWhatsAppClick(product)}
                  disabled={product.stock === 0}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-5 h-5" />
                  {product.stock > 0 ? 'Hacer un Pedido' : 'Agotado'}
                </button>

                {/* Stock */}
                {product.stock > 0 && product.stock < 10 && (
                  <p className="text-xs text-orange-600 text-center">
                    ¡Solo quedan {product.stock} unidades!
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Si no hay productos */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay productos disponibles en este momento
            </p>
          </div>
        )}
      </div>
    </section>
  );
}