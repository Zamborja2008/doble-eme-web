import { getAllProducts } from '@/application/products/getAllProducts';
import { ProductGrid } from '@/presentation/components/product/ProductGrid';

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Todos los Productos</h1>
      <ProductGrid products={products} />
    </div>
  );
}