'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/domain/entities';
import { WhatsAppButton } from './WhatsAppButton';
import { Badge } from '../ui/Badge';
import { formatCurrency, calculateDiscount } from '@/presentation/utils/format';
import { Package, Star, TrendingUp } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images || [product.imageUrl];
  const hasDiscount = product.discountPrice && product.discountPrice < product.price;
  const discount = hasDiscount ? calculateDiscount(product.price, product.discountPrice!) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.isNew && (
              <Badge className="absolute top-4 left-4" variant="success">
                <Star className="w-3 h-3 mr-1" />
                Nuevo
              </Badge>
            )}
            {hasDiscount && (
              <Badge className="absolute top-4 right-4" variant="danger">
                -{discount}%
              </Badge>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-green-600' : 'border-transparent'
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category.name}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-3 mb-4">
              {hasDiscount ? (
                <>
                  <span className="text-4xl font-bold text-green-600">
                    {formatCurrency(product.discountPrice!)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {formatCurrency(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Características */}
          {product.characteristics && product.characteristics.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3">Características</h3>
              <ul className="space-y-2">
                {product.characteristics.map((char, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Package className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stock */}
          <div className="bg-gray-50 rounded-lg p-4">
            {product.stock > 0 ? (
              <div className="flex items-center text-green-600">
                <Package className="w-5 h-5 mr-2" />
                <span className="font-medium">
                  {product.stock > 10 ? 'En stock' : `Solo quedan ${product.stock} unidades`}
                </span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <Package className="w-5 h-5 mr-2" />
                <span className="font-medium">Agotado</span>
              </div>
            )}
          </div>

          {/* Estadísticas */}
          {product.salesCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span>{product.salesCount} personas ya compraron este producto</span>
            </div>
          )}

          {/* WhatsApp Button */}
          <WhatsAppButton product={product} />
        </div>
      </div>

      {/* Información Nutricional */}
      {product.nutritionalInfo && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Información Nutricional</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-900 text-white px-6 py-3">
              <p className="font-semibold">
                Tamaño de porción: {product.nutritionalInfo.servingSize}
              </p>
            </div>
            <div className="divide-y divide-gray-200">
              <NutritionalRow label="Calorías" value={product.nutritionalInfo.calories.toString()} bold />
              <NutritionalRow label="Grasa Total" value={product.nutritionalInfo.totalFat} />
              <NutritionalRow label="Grasa Saturada" value={product.nutritionalInfo.saturatedFat} indent />
              <NutritionalRow label="Grasa Trans" value={product.nutritionalInfo.transFat} indent />
              <NutritionalRow label="Colesterol" value={product.nutritionalInfo.cholesterol} />
              <NutritionalRow label="Sodio" value={product.nutritionalInfo.sodium} />
              <NutritionalRow label="Carbohidratos Totales" value={product.nutritionalInfo.totalCarbohydrate} />
              <NutritionalRow label="Fibra Dietética" value={product.nutritionalInfo.dietaryFiber} indent />
              <NutritionalRow label="Azúcares" value={product.nutritionalInfo.sugars} indent />
              <NutritionalRow label="Proteína" value={product.nutritionalInfo.protein} />
              
              {product.nutritionalInfo.vitamins && (
                <>
                  {Object.entries(product.nutritionalInfo.vitamins).map(([vitamin, value]) => (
                    <NutritionalRow key={vitamin} label={vitamin} value={value} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente auxiliar
function NutritionalRow({ 
  label, 
  value, 
  bold = false, 
  indent = false 
}: { 
  label: string; 
  value: string; 
  bold?: boolean; 
  indent?: boolean;
}) {
  return (
    <div className={`px-6 py-3 flex justify-between ${bold ? 'font-bold' : ''}`}>
      <span className={indent ? 'ml-4' : ''}>{label}</span>
      <span>{value}</span>
    </div>
  );
}