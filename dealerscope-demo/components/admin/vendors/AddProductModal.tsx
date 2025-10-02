import React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface AddProductModalProps {
  isOpen: boolean;
  productName: string;
  productCategory: string;
  productDescription: string;
  categories: string[];
  onProductNameChange: (value: string) => void;
  onProductCategoryChange: (value: string) => void;
  onProductDescriptionChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  productName,
  productCategory,
  productDescription,
  categories,
  onProductNameChange,
  onProductCategoryChange,
  onProductDescriptionChange,
  onClose,
  onSubmit
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-elevated rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-hero">Add New Product</h2>
          <button onClick={onClose} className="text-disabled hover:text-secondary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <Input
            label="Product Name"
            value={productName}
            onChange={(e) => onProductNameChange(e.target.value)}
            placeholder="e.g., BuyNow, MessageNow"
            fullWidth
          />

          <div>
            <label className="block text-sm font-medium text-tertiary mb-2">Category</label>
            <select
              value={productCategory}
              onChange={(e) => onProductCategoryChange(e.target.value)}
              className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-tertiary mb-2">Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => onProductDescriptionChange(e.target.value)}
              rows={3}
              placeholder="Brief description of the product"
              className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={onSubmit}
            disabled={!productName || !productCategory}
          >
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;