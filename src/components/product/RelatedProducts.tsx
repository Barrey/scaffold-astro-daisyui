import type { RelatedProduct } from '../../types/product';

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl aspect-square object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="rating rating-sm">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${product.id}`}
                      className="mask mask-star-2 bg-primary"
                      checked={i + 1 === Math.round(product.rating)}
                      readOnly
                    />
                  ))}
                </div>
                <span className="text-sm text-base-content/70">
                  ({product.reviews})
                </span>
              </div>
              <p className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              <div className="card-actions justify-end mt-2">
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
