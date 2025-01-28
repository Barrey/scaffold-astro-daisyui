import { useState } from 'react';
import type { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.color || ''
  );

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-4">
          <div className="rating rating-sm">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-primary"
                checked={i + 1 === Math.round(product.rating)}
                readOnly
              />
            ))}
          </div>
          <span className="text-sm text-base-content/70">
            {product.reviews} reviews
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="text-2xl font-bold text-primary">
        ${product.price.toFixed(2)}
      </div>

      {/* Variants */}
      {product.variants && (
        <div>
          <h3 className="text-sm font-medium mb-2">Color</h3>
          <div className="flex gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.color}
                onClick={() => setSelectedVariant(variant.color!)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedVariant === variant.color
                    ? 'border-primary'
                    : 'border-base-300'
                }`}
                style={{ backgroundColor: variant.color }}
                aria-label={`Select ${variant.color} color`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <h3 className="text-sm font-medium mb-2">Quantity</h3>
        <div className="join border border-base-300 rounded-lg">
          <button
            className="join-item btn btn-ghost"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <input
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            className="join-item w-20 text-center"
          />
          <button
            className="join-item btn btn-ghost"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button className="btn btn-primary">Add to Cart</button>

      {/* SKU and Category */}
      <div className="text-sm text-base-content/70">
        <p>SKU: {product.sku}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}
