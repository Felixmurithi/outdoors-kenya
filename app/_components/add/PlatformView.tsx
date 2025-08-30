"use client";

import { SocialMediaLink } from "@/app/_components/add/types";
import PlatformView from "./PlatformView";

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
    </div>
  );
}
