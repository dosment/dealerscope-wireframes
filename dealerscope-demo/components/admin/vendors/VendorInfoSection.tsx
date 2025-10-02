import React from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface VendorInfoSectionProps {
  vendorName: string;
  vendorWebsite: string;
  vendorDescription: string;
  vendorLogo: string | null;
  onVendorNameChange: (value: string) => void;
  onVendorWebsiteChange: (value: string) => void;
  onVendorDescriptionChange: (value: string) => void;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogoRemove: () => void;
  onSave: () => void;
}

const VendorInfoSection: React.FC<VendorInfoSectionProps> = ({
  vendorName,
  vendorWebsite,
  vendorDescription,
  vendorLogo,
  onVendorNameChange,
  onVendorWebsiteChange,
  onVendorDescriptionChange,
  onLogoUpload,
  onLogoRemove,
  onSave
}) => {
  return (
    <div className="bg-elevated border border-primary rounded-lg p-6 mb-6">
      <h2 className="text-lg font-medium text-hero mb-4">Vendor Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo Upload */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-tertiary mb-2">Vendor Logo</label>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 border-2 border-dashed border-secondary rounded-lg flex items-center justify-center bg-secondary mb-3">
              {vendorLogo ? (
                <img src={vendorLogo} alt="Vendor logo" className="w-full h-full object-contain p-2" />
              ) : (
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-disabled" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-muted mt-1">No logo</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={onLogoUpload}
              className="hidden"
              id="logo-upload"
            />
            <label
              htmlFor="logo-upload"
              className="px-4 py-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 cursor-pointer"
            >
              Upload Logo
            </label>
            {vendorLogo && (
              <button
                onClick={onLogoRemove}
                className="mt-2 text-xs text-red-600 hover:text-red-800"
              >
                Remove Logo
              </button>
            )}
            <p className="text-xs text-muted mt-2 text-center">
              PNG, JPG up to 2MB<br />
              Recommended: 200x200px
            </p>
          </div>
        </div>

        {/* Vendor Details */}
        <div className="md:col-span-2 space-y-4">
          <Input
            label="Vendor Name"
            value={vendorName}
            onChange={(e) => onVendorNameChange(e.target.value)}
            fullWidth
          />
          <Input
            label="Website"
            value={vendorWebsite}
            onChange={(e) => onVendorWebsiteChange(e.target.value)}
            fullWidth
          />
          <div>
            <label className="block text-sm font-medium text-tertiary mb-2">Description</label>
            <textarea
              value={vendorDescription}
              onChange={(e) => onVendorDescriptionChange(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="primary" size="sm" onClick={onSave}>Save Vendor Info</Button>
      </div>
    </div>
  );
};

export default VendorInfoSection;