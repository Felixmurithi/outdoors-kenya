"use client";

import { UseFormRegister } from "react-hook-form";
import Input from "../generic/Input";
import { validateUrl } from "@/app/_utils/validateUrl";
import { SocialMediaLink } from "@/app/_components/add/types";

// Re-export the validation function to avoid import issues
const validateUrlWrapper = (url: string, domain: string): boolean | string => {
  try {
    return validateUrl(url, domain);
  } catch (error) {
    return "Invalid URL";
  }
};
interface Props {
  index: number;
  field: SocialMediaLink;
  urlInput: string;
  onUrlChange: (value: string) => void;
  onSave?: () => void;
  onCancel: () => void;
  errors?: any;
  platformKey: string | string[];
  platformLabel: string;
  register: UseFormRegister<any>;
}

export default function SocialMediaPlatformEdit({
  index,
  field,
  urlInput,
  onUrlChange,
  onSave,
  onCancel,
  errors,
  platformKey,
  platformLabel,
  register,
}: Props) {
  return (
    <div className="border rounded p-3 mb-2">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{platformLabel}</span>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-600 text-sm hover:underline"
        >
          Cancel
        </button>
      </div>
      <div className="space-y-2">
        <Input
          type="text"
          label="URL"
          placeholder={`https://${
            Array.isArray(platformKey) ? platformKey[0] : platformKey
          }/username`}
          value={urlInput}
          error={errors?.[field.platform]?.message}
          {...register(`socialLinks.${index}.url`, {
            validate: (value: string) => {
              if (!value) return "URL is required";
              const validationResult = validateUrlWrapper(
                value,
                Array.isArray(platformKey) ? platformKey[0] : platformKey
              );
              return validationResult === true ? true : validationResult;
            },
          })}
        />
        {errors?.[index]?.url && (
          <p className="text-red-500 text-xs mt-1">
            {errors[index]?.url?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
