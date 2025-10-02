'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Layout from '@/components/ui/Layout';
import VendorInfoSection from '@/components/admin/vendors/VendorInfoSection';
import ProductManagementSection from '@/components/admin/vendors/ProductManagementSection';
import AddProductModal from '@/components/admin/vendors/AddProductModal';
import EditProductModal from '@/components/admin/vendors/EditProductModal';
import CSSSelectorModal from '@/components/admin/vendors/CSSSelectorModal';
import AISelectorModal from '@/components/admin/vendors/AISelectorModal';

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

const categories = [
  'Chat Tools',
  'Digital Retailing',
  'Trade Tools',
  'Inventory Management',
  'Analytics',
  'Marketing Tools',
  'Finance Solutions',
  'Site Provider'
];

export default function VendorDetailPage() {
  const params = useParams();
  const vendorId = params.id as string;

  // Vendor state
  const [vendorName, setVendorName] = useState('CarNow');
  const [vendorWebsite, setVendorWebsite] = useState('carnow.com');
  const [vendorDescription, setVendorDescription] = useState('Digital retailing and chat solutions for automotive dealerships');
  const [vendorLogo, setVendorLogo] = useState<string | null>(null);

  // Product state
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'BuyNow',
      category: 'Digital Retailing',
      description: 'Online vehicle purchasing platform',
      selectors: [
        { id: 's1', selector: '.carnow-buynow-widget', type: 'class', confidence: 95, lastTested: '2 hours ago', status: 'working' },
        { id: 's2', selector: '#carnow-purchase-button', type: 'id', confidence: 88, lastTested: '1 day ago', status: 'working' },
      ],
      dealershipsDetected: 45,
      status: 'active'
    },
    {
      id: '2',
      name: 'MessageNow',
      category: 'Chat Tools',
      description: 'Live chat and messaging solution',
      selectors: [
        { id: 's3', selector: '[data-carnow-chat]', type: 'attribute', confidence: 92, lastTested: '5 hours ago', status: 'working' },
      ],
      dealershipsDetected: 67,
      status: 'active'
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modal state
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [showAddSelectorModal, setShowAddSelectorModal] = useState(false);
  const [showAISelectorModal, setShowAISelectorModal] = useState(false);

  // Form state
  const [newProductName, setNewProductName] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newSelector, setNewSelector] = useState('');
  const [newSelectorType, setNewSelectorType] = useState<'class' | 'id' | 'attribute' | 'xpath'>('class');
  const [elementCode, setElementCode] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<CSSSelector[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Vendor logo handlers
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVendorLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoRemove = () => {
    setVendorLogo(null);
  };

  const handleSaveVendorInfo = () => {
    console.log('Saving vendor info:', { vendorName, vendorWebsite, vendorDescription, vendorLogo });
  };

  // Product handlers
  const handleAddProduct = () => {
    const newProduct: Product = {
      id: `p${products.length + 1}`,
      name: newProductName,
      category: newProductCategory,
      description: newProductDescription,
      selectors: [],
      dealershipsDetected: 0,
      status: 'active'
    };
    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductCategory('');
    setNewProductDescription('');
    setShowAddProductModal(false);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setShowEditProductModal(true);
  };

  const handleSaveEditedProduct = () => {
    if (!selectedProduct) return;
    const updatedProducts = products.map(p =>
      p.id === selectedProduct.id ? selectedProduct : p
    );
    setProducts(updatedProducts);
    setShowEditProductModal(false);
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  // Selector handlers
  const handleAddSelector = () => {
    if (!selectedProduct) return;

    const newSelectorObj: CSSSelector = {
      id: `s${Date.now()}`,
      selector: newSelector,
      type: newSelectorType,
      confidence: 0,
      lastTested: 'Never',
      status: 'untested'
    };

    const updatedProducts = products.map(p => {
      if (p.id === selectedProduct.id) {
        return {
          ...p,
          selectors: [...p.selectors, newSelectorObj]
        };
      }
      return p;
    });

    setProducts(updatedProducts);
    setNewSelector('');
    setShowAddSelectorModal(false);
  };

  const handleGenerateSelectors = () => {
    setIsGenerating(true);

    // Simulate AI processing
    setTimeout(() => {
      const suggestions: CSSSelector[] = [
        {
          id: `ai1`,
          selector: '.carnow-widget',
          type: 'class',
          confidence: 94,
          lastTested: 'Just now',
          status: 'untested'
        },
        {
          id: `ai2`,
          selector: '#carnow-container',
          type: 'id',
          confidence: 89,
          lastTested: 'Just now',
          status: 'untested'
        },
        {
          id: `ai3`,
          selector: '[data-product="carnow"]',
          type: 'attribute',
          confidence: 92,
          lastTested: 'Just now',
          status: 'untested'
        },
        {
          id: `ai4`,
          selector: '//div[@class="carnow-app"]',
          type: 'xpath',
          confidence: 87,
          lastTested: 'Just now',
          status: 'untested'
        }
      ];
      setAiSuggestions(suggestions);
      setIsGenerating(false);
    }, 2000);
  };

  const handleAddAISuggestion = (suggestion: CSSSelector) => {
    if (!selectedProduct) return;

    const updatedProducts = products.map(p => {
      if (p.id === selectedProduct.id) {
        return {
          ...p,
          selectors: [...p.selectors, suggestion]
        };
      }
      return p;
    });

    setProducts(updatedProducts);
    setAiSuggestions(aiSuggestions.filter(s => s.id !== suggestion.id));
  };

  const handleTestSelector = (productId: string, selectorId: string) => {
    // Simulate testing
    const updatedProducts = products.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          selectors: p.selectors.map(s => {
            if (s.id === selectorId) {
              return {
                ...s,
                confidence: Math.floor(Math.random() * 20) + 80,
                lastTested: 'Just now',
                status: Math.random() > 0.2 ? 'working' as const : 'failing' as const
              };
            }
            return s;
          })
        };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  const handleDeleteSelector = (productId: string, selectorId: string) => {
    const updatedProducts = products.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          selectors: p.selectors.filter(s => s.id !== selectorId)
        };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  return (
    <Layout userType="admin">
      <div className="h-full p-6">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <a href="/admin/vendors" className="text-muted hover:text-tertiary">
                ← Back to Vendors
              </a>
            </div>
            <h1 className="text-2xl font-semibold text-hero">{vendorName}</h1>
            <p className="text-secondary">Manage products and detection rules</p>
          </div>

          {/* Vendor Info Section */}
          <VendorInfoSection
            vendorName={vendorName}
            vendorWebsite={vendorWebsite}
            vendorDescription={vendorDescription}
            vendorLogo={vendorLogo}
            onVendorNameChange={setVendorName}
            onVendorWebsiteChange={setVendorWebsite}
            onVendorDescriptionChange={setVendorDescription}
            onLogoUpload={handleLogoUpload}
            onLogoRemove={handleLogoRemove}
            onSave={handleSaveVendorInfo}
          />

          {/* Product Management Section */}
          <ProductManagementSection
            products={products}
            onAddProduct={() => setShowAddProductModal(true)}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
            onAddSelector={(product) => {
              setSelectedProduct(product);
              setShowAddSelectorModal(true);
            }}
            onAIGenerateSelector={(product) => {
              setSelectedProduct(product);
              setShowAISelectorModal(true);
              setElementCode('');
              setAiSuggestions([]);
            }}
            onTestSelector={handleTestSelector}
            onDeleteSelector={handleDeleteSelector}
          />

          {/* Modals */}
          <AddProductModal
            isOpen={showAddProductModal}
            productName={newProductName}
            productCategory={newProductCategory}
            productDescription={newProductDescription}
            categories={categories}
            onProductNameChange={setNewProductName}
            onProductCategoryChange={setNewProductCategory}
            onProductDescriptionChange={setNewProductDescription}
            onClose={() => setShowAddProductModal(false)}
            onSubmit={handleAddProduct}
          />

          <EditProductModal
            isOpen={showEditProductModal}
            product={selectedProduct}
            categories={categories}
            onProductChange={setSelectedProduct}
            onClose={() => setShowEditProductModal(false)}
            onSave={handleSaveEditedProduct}
          />

          <CSSSelectorModal
            isOpen={showAddSelectorModal}
            productName={selectedProduct?.name || ''}
            selector={newSelector}
            selectorType={newSelectorType}
            onSelectorChange={setNewSelector}
            onSelectorTypeChange={setNewSelectorType}
            onClose={() => setShowAddSelectorModal(false)}
            onSubmit={handleAddSelector}
          />

          <AISelectorModal
            isOpen={showAISelectorModal}
            productName={selectedProduct?.name || ''}
            elementCode={elementCode}
            aiSuggestions={aiSuggestions}
            isGenerating={isGenerating}
            onElementCodeChange={setElementCode}
            onGenerate={handleGenerateSelectors}
            onTestSuggestion={(id) => handleTestSelector(selectedProduct?.id || '', id)}
            onAddSuggestion={handleAddAISuggestion}
            onClose={() => setShowAISelectorModal(false)}
          />
        </div>
      </div>
    </Layout>
  );
}