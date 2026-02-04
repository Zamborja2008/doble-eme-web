import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/application/products/getProductBySlug';
import { ProductDetail } from '@/presentation/components/product/ProductDetail';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}