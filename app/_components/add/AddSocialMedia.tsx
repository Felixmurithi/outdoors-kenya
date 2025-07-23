"use client";

import { useState } from "react";
import { useForm, useFieldArray, useFormState } from "react-hook-form";
import Input from "../generic/Input";

type SocialMediaLink = {
  platform: string;
  url: string;
  isEditing?: boolean;
};

type FormValues = {
  socialLinks: SocialMediaLink[];
};

const SOCIAL_MEDIA_OPTIONS = [
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "twitter", label: "X (Twitter)" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "pinterest", label: "Pinterest" },
];

const URL_PATTERNS: Record<string, { domain: string }> = {
  facebook: { domain: 'facebook.com' },
  instagram: { domain: 'instagram.com' },
  twitter: { domain: 'x.com' },
  linkedin: { domain: 'linkedin.com' },
  youtube: { domain: 'youtube.com' },
  tiktok: { domain: 'tiktok.com' },
  pinterest: { domain: 'pinterest.com' },
};

const normalizeUrl = (input: string, platform: string): string => {
  if (!input) return ''; 
  
  const platformData = URL_PATTERNS[platform];
  if (!platformData) return input;
  
  let url = input.trim();
  
  // Remove any protocol or www if present
  url = url.replace(/^(https?:\/\/)?(www\.)?/i, '');
  
  // If it's just a username (no dots or slashes), construct full URL
  if (/^[^./]+$/.test(url)) {
    return `https://www.${platformData.domain}/${url}`;
  }
  
  // Otherwise, just ensure it has https://
  return `https://${url}`;
};

export default function AddSocialMedia() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [urlInput, setUrlInput] = useState("");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      socialLinks: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const { isValid } = useFormState({
    control,
    name: "socialLinks",
  });

  const validateUrl = (url: string, platform: string) => {
    if (!url) return "URL is required";
    
    const platformData = URL_PATTERNS[platform];
    if (!platformData) return "Invalid platform";
    
    // Normalize the URL for validation
    const normalized = normalizeUrl(url, platform);
    
    // Check if the normalized URL contains the platform's domain
    if (!new RegExp(platformData.domain.replace('.', '\\.'), 'i').test(normalized)) {
      return `Please enter a valid ${platform} URL or username`;
    }
    
    return true;
  };

  const handleAddPlatform = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlatform) return;
  
    const platform = availablePlatforms.find(
      (p) => p.value === selectedPlatform
    );
    if (!platform) return;
  
    // If we're editing an existing platform
    if (editingIndex !== null) {
      const isValid = await trigger(`socialLinks.${editingIndex}.url`);
      if (!isValid) return;
  
      // Normalize the URL before saving
      const normalizedUrl = normalizeUrl(urlInput, platform.value);
      
      setValue(`socialLinks.${editingIndex}`, {
        platform: fields[editingIndex].platform,
        url: normalizedUrl,
        isEditing: false,
      });
      setEditingIndex(null);
      setUrlInput("");
    } else {
      // Adding a new platform
      append({
        platform: selectedPlatform,
        url: "",
        isEditing: true,
      });
      setEditingIndex(fields.length);
      setUrlInput("");
    }
    setSelectedPlatform("");
  };

  const onSubmit = (data: FormValues) => {
    console.log("Submitted social links:", data.socialLinks);
    // Handle form submission here
  };

  // Get available platforms that haven't been added yet
  const availablePlatforms = SOCIAL_MEDIA_OPTIONS.filter(
    (option) => !fields.some((field) => field.platform === option.value)
  );

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold mb-4">Add Social Media Links</h2>

      <div onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Display added social media links */}
        {fields.map((field, index) => {
          const platform = SOCIAL_MEDIA_OPTIONS.find(
            (p) => p.value === field.platform
          );
          const isEditing = editingIndex === index;

          return (
            <div key={field.id} className="border rounded p-3 mb-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{platform?.label}</span>
                <div className="space-x-2">
                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingIndex(index);
                        setUrlInput(field.url);
                      }}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      if (editingIndex === index) {
                        setEditingIndex(null);
                      }
                      remove(index);
                    }}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {isEditing ? (
                <div className="space-y-2">
                  <Input
                    type="url"
                    label="URL"
                    placeholder={`${platform?.value}/username or just username`}
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    error={!!errors.socialLinks?.[index]?.url}
                    register={{
                      ...register(`socialLinks.${index}.url` as const, {
                        validate: (value) => validateUrl(value, field.platform),
                        value: urlInput,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUrlInput(e.target.value),
                      }),
                    }}
                  />
                  {errors.socialLinks?.[index]?.url && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.socialLinks[index]?.url?.message}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-gray-700 break-all">
                  <span className="font-medium">URL:</span> {field.url || "Not provided"}
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
              disabled={
                !selectedPlatform || (editingIndex !== null && !urlInput.trim())
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {editingIndex !== null ? "Update" : "Add Platform"}
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
      </div>
    </div>
  );
}
