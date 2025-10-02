import React from 'react';
import EmptyState from '@/components/ui/EmptyState';

interface CSSSelector {
  id: string;
  selector: string;
  type: 'class' | 'id' | 'attribute' | 'xpath';
  confidence: number;
  lastTested: string;
  status: 'working' | 'failing' | 'untested';
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  selectors: CSSSelector[];
  dealershipsDetected: number;
  status: 'active' | 'inactive';
}

interface ProductManagementSectionProps {
  products: Product[];
  onAddProduct: () => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onAddSelector: (product: Product) => void;
  onAIGenerateSelector: (product: Product) => void;
  onTestSelector: (productId: string, selectorId: string) => void;
  onDeleteSelector: (productId: string, selectorId: string) => void;
}

const ProductManagementSection: React.FC<ProductManagementSectionProps> = ({
  products,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
  onAddSelector,
  onAIGenerateSelector,
  onTestSelector,
  onDeleteSelector
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working': return 'bg-green-100 text-green-800';
      case 'failing': return 'bg-red-100 text-red-800';
      case 'untested': return 'bg-tertiary text-primary';
      default: return 'bg-tertiary text-primary';
    }
  };

  return (
    <div className="bg-elevated border border-primary rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-hero">Products ({products.length})</h2>
        <button
          onClick={onAddProduct}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <EmptyState
          message="No products found"
          description="Add products to this vendor to start tracking their implementation across dealerships"
          actionLabel="Add Product"
          onAction={onAddProduct}
        />
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="border border-primary rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-md font-medium text-hero">{product.name}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-sm text-secondary mt-1">{product.description}</p>
                  <p className="text-xs text-muted mt-1">
                    Detected on {product.dealershipsDetected} dealerships • {product.selectors.length} selectors
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onEditProduct(product)}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteProduct(product.id)}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* CSS Selectors */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-tertiary">CSS Selectors</h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onAIGenerateSelector(product)}
                      className="text-xs px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                    >
                      AI Generate
                    </button>
                    <button
                      onClick={() => onAddSelector(product)}
                      className="text-xs px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      Add Manually
                    </button>
                  </div>
                </div>

                {product.selectors.length === 0 ? (
                  <p className="text-sm text-muted italic">No selectors added yet</p>
                ) : (
                  <div className="space-y-2">
                    {product.selectors.map((selector) => (
                      <div key={selector.id} className="flex items-center justify-between bg-secondary rounded p-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <code className="text-sm font-mono text-hero">{selector.selector}</code>
                            <span className="text-xs px-2 py-0.5 bg-gray-200 text-tertiary rounded">
                              {selector.type}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(selector.status)}`}>
                              {selector.status}
                            </span>
                            {selector.confidence > 0 && (
                              <span className="text-xs text-secondary">
                                {selector.confidence}% confidence
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted mt-1">Last tested: {selector.lastTested}</p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => onTestSelector(product.id, selector.id)}
                            className="text-xs text-blue-600 hover:text-blue-800"
                          >
                            Test
                          </button>
                          <button
                            onClick={() => onDeleteSelector(product.id, selector.id)}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductManagementSection;