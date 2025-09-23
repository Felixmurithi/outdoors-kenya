import {
  useFieldArray,
  useFormState,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useState } from "react";
import { SOCIAL_PLATFORMS } from "@/app/_lib/constants";

export type SocialMediaLink = {
  platform: string;
  url: string;
};

export type FormValues = {
  socialLinks: SocialMediaLink[];
};

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
  const [availablePlatforms, setAvailablePlatforms] = useState<string[] | null>(
    SOCIAL_PLATFORMS
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
