// app/_components/generic/Icon.tsx
"use client";

import {
  RiFacebookBoxFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiTiktokFill,
  RiGlobalLine,
  RiLink,
} from "@remixicon/react";
import { ComponentType } from "react";

// Define the icon mapping
const ICONS = {
  facebook: RiFacebookBoxFill,
  twitter: RiTwitterXFill,
  x: RiTwitterXFill, // Alias for X (Twitter)
  instagram: RiInstagramFill,
  linkedin: RiLinkedinBoxFill,
  youtube: RiYoutubeFill,
  tiktok: RiTiktokFill,
  website: RiGlobalLine,
  default: RiLink,
} as const;

// Type for platform keys
type IconName = keyof typeof ICONS;

interface IconProps {
  platform: string;
  className?: string;
  size?: number;
  color?: string;
}

export function SocialMediaIcon({
  platform,
  className = "",
  size = 24,
  color,
}: IconProps) {
  // Normalize the name and get the icon component
  const normalizedPlatform = platform.toLowerCase() as IconName;
  const IconComponent = ICONS[normalizedPlatform] || ICONS.default;

  return (
    <IconComponent
      className={className}
      size={size}
      style={color ? { color } : undefined}
      aria-label={platform}
    />
  );
}

// Usage examples:
// <Icon name="facebook" />
// <Icon name="instagram" size={32} className="text-pink-500" />
// <Icon name="twitter" color="#1DA1F2" />
