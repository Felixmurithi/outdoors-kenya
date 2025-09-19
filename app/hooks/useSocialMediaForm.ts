import {
  useFieldArray,
  useFormState,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useState } from "react";

/**
 * Represents a social media link with its platform and URL
 * @property {string} platform - The social media platform identifier (e.g., 'facebook', 'instagram')
 * @property {string} url - The complete URL to the social media profile or page
 */
export type SocialMediaLink = {
  platform: string;
  url: string;
};

/**
 * Form values structure for the social media links form
 * @property {SocialMediaLink[]} socialLinks - Array of social media links
 */
export type FormValues = {
  socialLinks: SocialMediaLink[];
};

/**
 * Available social media platforms with their display names
 * @constant
 */
export const platforms = {
  facebook: "Facebook",
  instagram: "Instagram",
  x: "X (Twitter)",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  tiktok: "TikTok",
  website: "Website",
} as const;

/**
 * Custom hook for managing social media form state and validation
 *
 * @example
 * const { control, handleSubmit, fieldArray } = useSocialMediaForm();
 *
 * @returns Form control methods and state
 * @returns control - React Hook Form control object
 * @returns handleSubmit - Form submission handler
 * @returns fieldArray - Methods from useFieldArray
 */

export function useSocialMediaForm() {
  const { register, control, clearErrors, trigger, getValues } =
    useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "socialLinks",
  });

  const { isValid, errors: { socialLinks: socialLinksErrors = {} } = {} } =
    useFormState({
      control,
      name: "socialLinks",
    });

  const socialLinks = useWatch({
    control,
    name: "socialLinks",
    defaultValue: [],
  });

  const [editingIndex, setEditingIndex] = useState<number | null>(0);
  const [availablePlatforms, setAvailablePlatforms] = useState<string[]>(
    Object.keys(platforms)
  );

  return {
    register,
    control,
    clearErrors,
    trigger,
    getValues,
    fields,
    append,
    remove,
    isValid,
    socialLinksErrors,
    socialLinks,
    editingIndex,
    setEditingIndex,
    availablePlatforms,
    setAvailablePlatforms,
  };
}
