import {
  useFieldArray,
  useFormState,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useState } from "react";

//types
export type SocialMediaLink = {
  platform: string;
  url: string;
};

export type FormValues = {
  socialLinks: SocialMediaLink[];
};

//options-
export const platforms = {
  facebook: "Facebook",
  instagram: "Instagram",
  x: "X (Twitter)",
  linkedin: "LinkedIn",
  youtube: "YouTube",
  tiktok: "TikTok",
  website: "Website",
} as const;

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
