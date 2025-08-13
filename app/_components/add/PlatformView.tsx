"use client";

import { SocialMediaLink } from "@/app/_components/add/types";

interface SocialMediaPlatformViewProps {
  field: SocialMediaLink;
  onEdit: () => void;
  onRemove: () => void;
  platformLabel: string;
  platformKey: string | string[];
}

export default function SocialMediaPlatformView({
  field,
  onEdit,
  onRemove,
  platformLabel,
  platformKey,
}: SocialMediaPlatformViewProps) {
  // Get the icon name based on platform
  const getIconName = (platformKey: string) => {
    const platformMap: Record<string, string> = {
      facebook: "facebook",
      instagram: "instagram",
      x: "twitter",
      twitter: "twitter",
      linkedin: "linkedin",
      youtube: "youtube",
      tiktok: "tiktok",
      website: "globe",
    };
    return platformMap[platformKey] || "link";
  };

  const iconName = Array.isArray(platformKey)
    ? getIconName(platformKey[0])
    : getIconName(platformKey || "");

  return (
    <div className="border rounded p-3 mb-2">
      <div className="flex justify-k items-center mb-2">
        <div className="flex items-center space-x-2">
          <img
            src={`/social-icons/${iconName}.svg`}
            alt={`${field.platform} icon`}
            className="w-5 h-5"
          />
          <span className="font-medium">{platformLabel}</span>
        </div>
        <div className="space-x-2">
          <button
            type="button"
            onClick={onEdit}
            className="text-blue-600 text-sm hover:underline"
            aria-label={`Edit ${platformLabel}`}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="text-red-600 text-sm hover:underline"
            aria-label={`Remove ${platformLabel}`}
          >
            Remove
          </button>
        </div>
      </div>
      {field.url && (
        <div className="mt-2">
          <a
            href={
              field.url.startsWith("http") ? field.url : `https://${field.url}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all flex items-center space-x-1"
          >
            <span className="truncate">{field.url}</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
