"use client";

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

type SocialMediaLink = {
  platform: string;
  url: string;
};

type FormValues = {
  socialLinks: SocialMediaLink[];
};

const SOCIAL_MEDIA_OPTIONS = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'twitter', label: 'X (Twitter)' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'pinterest', label: 'Pinterest' },
];

export default function AddSocialMedia() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  
  const { 
    control, 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    reset
  } = useForm<FormValues>({
    defaultValues: {
      socialLinks: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });

  // Get available platforms that haven't been added yet
  const availablePlatforms = SOCIAL_MEDIA_OPTIONS.filter(
    (option) => !fields.some((field) => field.platform === option.value)
  );

  const handleAddPlatform = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlatform && availablePlatforms.some(p => p.value === selectedPlatform)) {
      append({
        platform: selectedPlatform,
        url: ''
      });
      setSelectedPlatform('');
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Submitted social links:', data.socialLinks);
    // Handle form submission here
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold mb-4">Add Social Media Links</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Display added social media links */}
        {fields.map((field, index) => {
          const platform = SOCIAL_MEDIA_OPTIONS.find(p => p.value === field.platform);
          return (
            <div key={field.id} className="border rounded p-3 mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{platform?.label}</span>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">URL:</span>
                <input
                  type="url"
                  placeholder={`https://${field.platform}.com/username`}
                  className={`flex-1 border rounded px-2 py-1 text-sm ${
                    errors.socialLinks?.[index]?.url ? 'border-red-500' : ''
                  }`}
                  {...register(`socialLinks.${index}.url` as const, {
                    required: 'URL is required',
                    pattern: {
                      value: /^https?:\/\//,
                      message: 'URL must start with http:// or https://',
                    },
                  })}
                />
              </div>
              {errors.socialLinks?.[index]?.url && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.socialLinks[index]?.url?.message}
                </p>
              )}
            </div>
          );
        })}

        {/* Add new social media form */}
        {availablePlatforms.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="flex-1 p-2 border rounded"
              aria-label="Select social media platform"
            >
              <option value="">-- Select Platform --</option>
              {availablePlatforms.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <button
              type="button"
              onClick={handleAddPlatform}
              disabled={!selectedPlatform}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
            >
              Add Platform
            </button>
          </div>
        )}

        {fields.length > 0 && (
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-4"
          >
            Save Social Links
          </button>
        )}
      </form>
    </div>
  );
}
