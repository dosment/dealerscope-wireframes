import React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface CSSSelectorModalProps {
  isOpen: boolean;
  productName: string;
  selector: string;
  selectorType: 'class' | 'id' | 'attribute' | 'xpath';
  onSelectorChange: (value: string) => void;
  onSelectorTypeChange: (value: 'class' | 'id' | 'attribute' | 'xpath') => void;
  onClose: () => void;
  onSubmit: () => void;
}

const CSSSelectorModal: React.FC<CSSSelectorModalProps> = ({
  isOpen,
  productName,
  selector,
  selectorType,
  onSelectorChange,
  onSelectorTypeChange,
  onClose,
  onSubmit
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-elevated rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-hero">Add CSS Selector - {productName}</h2>
          <button onClick={onClose} className="text-disabled hover:text-secondary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-tertiary mb-2">Selector Type</label>
            <select
              value={selectorType}
              onChange={(e) => onSelectorTypeChange(e.target.value as any)}
              className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="class">Class (.classname)</option>
              <option value="id">ID (#idname)</option>
              <option value="attribute">Attribute ([data-attr="value"])</option>
              <option value="xpath">XPath</option>
            </select>
          </div>

          <Input
            label="CSS Selector"
            value={selector}
            onChange={(e) => onSelectorChange(e.target.value)}
            placeholder=".carnow-widget or #carnow-button"
            fullWidth
          />

          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <p className="text-sm text-blue-800">
              <strong>Examples:</strong><br />
              Class: <code>.carnow-widget</code><br />
              ID: <code>#carnow-container</code><br />
              Attribute: <code>[data-product="carnow"]</code><br />
              XPath: <code>//div[@class="carnow"]</code>
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSubmit} disabled={!selector}>
            Add Selector
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CSSSelectorModal;