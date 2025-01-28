import type { Product, RelatedProduct, ProductFeature } from '../../types/product';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import ProductFeatures from './ProductFeatures';

interface ProductSingleProps {
  product: Product;
  relatedProducts: RelatedProduct[];
  features: ProductFeature[];
}

export default function ProductSingle({
  product,
  relatedProducts,
  features,
}: ProductSingleProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>

      {/* Product Description & Specs */}
      <ProductDescription product={product} />

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      {/* Features */}
      <ProductFeatures features={features} />
    </div>
  );
}
