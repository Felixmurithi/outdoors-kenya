"use client";

import { Fragment, useState } from "react";
import {
  useForm,
  useFieldArray,
  useFormState,
  useFormContext,
} from "react-hook-form";
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
  { platform: "x", label: "X (previously Twitter)" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "youtube", label: "YouTube" },
  { platform: "tiktok", label: "TikTok" },
  { platform: "website", label: "Website" },
];

//component
export default function AddSocialMedia() {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(0);
  const [urlInput, setUrlInput] = useState("");

  const { register, control, clearErrors, trigger } =
    useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "socialLinks",
  });

  const {
    isValid,
    errors: { socialLinks: socialLinksErrors } = { socialLinks: {} },
  } = useFormState({
    control,
  });

  // Get available platforms that haven't been added yet
  const availablePlatforms = SOCIAL_MEDIA_OPTIONS.filter(
    (option) => !fields.some((field) => field.platform === option.platform)
  );

  return (
    <FormRow label="Social Media Links">
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          {editingIndex === index ? (
            <div className="flex flex-col gap-4">
              <SocialMediaPlatformEdit
                index={index}
                SOCIAL_MEDIA_OPTIONS={SOCIAL_MEDIA_OPTIONS.map(
                  (option) => option.platform
                )}
              />
              <Button
                style="secondary"
                onClick={() => {
                  if (!isValid) return trigger(); //needed for error messages
                  append({ platform: "", url: "" });
                }}
              >
                Add
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/social-icons/facebook.svg"
                  height={50}
                  width={50}
                  alt=""
                />
                <span>http://localhost:3000/explore/add</span>
              </div>

              <div className="flex items-center gap-4">
                <Button style="text" className="text-red-700">
                  Edit
                </Button>
                <Button style="text">Remove</Button>
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </FormRow>
  );
}

// was thinking about how to display the added links, after searching how to do list and image upload row look like I found inspiration in using icons and  a table format with a grey background
