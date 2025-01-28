import { useState } from 'react';
import type { Product } from '../../types/product';

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({ product }: ProductDescriptionProps) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="mt-12">
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="product_tabs"
          role="tab"
          className="tab"
          aria-label="Description"
          checked={activeTab === 'description'}
          onChange={() => setActiveTab('description')}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>
        </div>

        <input
          type="radio"
          name="product_tabs"
          role="tab"
          className="tab"
          aria-label="Specifications"
          checked={activeTab === 'specs'}
          onChange={() => setActiveTab('specs')}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Product Specifications</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Weight:</span> {product.specs.weight}
                </li>
                <li>
                  <span className="font-medium">Material:</span>{' '}
                  {product.specs.material}
                </li>
                <li>
                  <span className="font-medium">Duration:</span>{' '}
                  {product.specs.duration}
                </li>
                <li>
                  <span className="font-medium">Composition:</span>{' '}
                  {product.specs.composition}
                </li>
                <li>
                  <span className="font-medium">Country:</span>{' '}
                  {product.specs.country}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
