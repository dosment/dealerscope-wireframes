import React from 'react';
import Button from '@/components/ui/Button';

interface CSSSelector {
  id: string;
  selector: string;
  type: 'class' | 'id' | 'attribute' | 'xpath';
  confidence: number;
  lastTested: string;
  status: 'working' | 'failing' | 'untested';
}

interface AISelectorModalProps {
  isOpen: boolean;
  productName: string;
  elementCode: string;
  aiSuggestions: CSSSelector[];
  isGenerating: boolean;
  onElementCodeChange: (value: string) => void;
  onGenerate: () => void;
  onTestSuggestion: (suggestionId: string) => void;
  onAddSuggestion: (suggestion: CSSSelector) => void;
  onClose: () => void;
}

const AISelectorModal: React.FC<AISelectorModalProps> = ({
  isOpen,
  productName,
  elementCode,
  aiSuggestions,
  isGenerating,
  onElementCodeChange,
  onGenerate,
  onTestSuggestion,
  onAddSuggestion,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-elevated rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-hero">AI Selector Generator - {productName}</h2>
          <button onClick={onClose} className="text-disabled hover:text-secondary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-tertiary mb-2">
              Paste HTML Element Code
            </label>
            <textarea
              value={elementCode}
              onChange={(e) => onElementCodeChange(e.target.value)}
              rows={10}
              placeholder='<div class="carnow-widget" data-product="buynow">
  <button id="carnow-purchase-button">Buy Now</button>
</div>'
              className="w-full px-3 py-2 font-mono text-sm border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            variant="primary"
            onClick={onGenerate}
            disabled={!elementCode || isGenerating}
            fullWidth
          >
            {isGenerating ? 'Generating...' : 'Generate Selectors with AI'}
          </Button>

          {aiSuggestions.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-hero mb-3">AI Suggestions</h3>
              <div className="space-y-2">
                {aiSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded p-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <code className="text-sm font-mono text-hero">{suggestion.selector}</code>
                        <span className="text-xs px-2 py-0.5 bg-purple-200 text-purple-800 rounded">
                          {suggestion.type}
                        </span>
                        <span className="text-xs text-purple-600">
                          {suggestion.confidence}% confidence
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => onTestSuggestion(suggestion.id)}
                        className="text-xs px-3 py-1 text-blue-600 hover:text-blue-800 border border-blue-300 rounded"
                      >
                        Test
                      </button>
                      <button
                        onClick={() => onAddSuggestion(suggestion)}
                        className="text-xs px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AISelectorModal;