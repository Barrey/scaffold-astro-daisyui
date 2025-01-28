import type { ProductFeature } from '../../types/product';

interface ProductFeaturesProps {
  features: ProductFeature[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="card-body items-center text-center">
            <div className="w-12 h-12 mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="card-title text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-base-content/70">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
