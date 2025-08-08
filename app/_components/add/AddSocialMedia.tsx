"use client";

import { useState } from "react";
import { useForm, useFieldArray, useFormState } from "react-hook-form";
import SocialMediaPlatformView from "./SocialMediaPlatformView";
import SocialMediaPlatformEdit from "./SocialMediaPlatformEdit";

import Input from "../generic/Input";
import validateUrl from "@/app/_utils/validateUrl";
import FormRow from "@/app/_components/generic/FormRow";
import Button from "../generic/Button";
import Select from "../generic/Select";

//types
export type SocialMediaLink = {
  platform: string;
  url: string;
};

export type FormValues = {
  socialLinks: SocialMediaLink[];
};

//options
export const SOCIAL_MEDIA_OPTIONS = [
  { platform: "facebook", label: "Facebook" },
  { platform: "instagram", label: "Instagram" },
  { platform: "x,twitter", label: "X (Twitter)" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "youtube", label: "YouTube" },
  { platform: "tiktok", label: "TikTok" },
  { platform: "website", label: "Website" },
];

//component
export default function AddSocialMedia({
  register,
  control,
  trigger,
  getValues,
}: any) {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(0);
  const [urlInput, setUrlInput] = useState("");

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "socialLinks",
  });

  const {
    isValid,
    errors: { socialLinks: socialLinksErrors } = { socialLinks: {} },
  } = useFormState<FormValues>({
    control,
  });

  // Get available platforms that haven't been added yet
  const availablePlatforms = SOCIAL_MEDIA_OPTIONS.filter(
    (option) => !fields.some((field) => field.platform === option.platform)
  );

  console.log(fields);

  return (
    <FormRow label="Social Media Links">
      {fields.map((field, index) => (
        <>
          <div key={field.id}>
            <Select
              name=""
              id=""
              {...register(`socialLinks.${index}.platform`)}
              options={SOCIAL_MEDIA_OPTIONS.map((option) => option.platform)}
            />
            {/* <option value="">Select Platform</option>
              {SOCIAL_MEDIA_OPTIONS.map((option, i) => (
                <option key={i} value={option.platform}>
                  {option.label}
                </option>
              ))} */}

            <Input
              type="url"
              register={register(`socialLinks.${index}.url`, {
                required: "URL is required",
                validate: (value: string) => {
                  const platform = getValues(`socialLinks.${index}.platform`);
                  if (!platform) return "Please select a platform first.";

                  return validateUrl(value, platform);
                },
              })}
            />
          </div>
          <div key={field.id} className="flex items-center">
            <div className="flex items-center">
              <img
                src="/social-icons/facebook.svg"
                height={50}
                width={50}
                alt=""
              />
              <span>platform</span>{" "}
            </div>
            <span>url</span>
          </div>
        </>
      ))}

      <Button
        onClick={() => {
          if (!isValid) return trigger(); //needed for error messages
          append({ platform: "", url: "" });
        }}
      >
        Add
      </Button>
    </FormRow>
  );
}

// was thinking about how to display the added links, after searching how to do list and image upload row look like I found inspiration in using icons and  a table format with a grey background
