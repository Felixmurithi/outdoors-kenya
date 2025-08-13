"use client";

import { Fragment, useState } from "react";
import { useFieldArray, useFormState, useFormContext } from "react-hook-form";
import PlatformView from "./PlatformView";
import PlatformEdit from "./PlatformEdit";

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
export const platforms = [
  { platform: "facebook", label: "Facebook" },
  { platform: "instagram", label: "Instagram" },
  { platform: "x", label: "X (previously Twitter)" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "youtube", label: "YouTube" },
  { platform: "tiktok", label: "TikTok" },
  { platform: "website", label: "Website" },
];

// COMPONENT
export default function AddSocialMedia() {
  // states
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(0);
  const [urlInput, setUrlInput] = useState("");

  // useFormContext
  const { register, control, clearErrors, trigger, getValues } =
    useFormContext<FormValues>();

  // get fields from form
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "socialLinks",
  });

  // get form state
  const {
    isValid,
    errors: { socialLinks: socialLinksErrors } = { socialLinks: {} },
  } = useFormState({
    control,
  });

  // get available platforms by filtering the platforms added to the fields array
  const availablePlatforms = platforms.filter(
    (p) => !fields.some((field) => field.platform === p.platform)
  );

  console.log(getValues("socialLinks"), fields);

  return (
    <FormRow
      label="Social Media Links"
      error={isValid ? "" : `${socialLinksErrors}`}
    >
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          {editingIndex === index ? (
            <div
              // I, ADD EDIT PLATFORM
              className="flex flex-col gap-4 shadow-md p-4"
            >
              <PlatformEdit
                index={index}
                availablePlatforms={availablePlatforms.map(
                  (option) => option.platform
                )}
              />

              <span>{socialLinksErrors?.[index]?.url?.message}</span>
              <Button
                style="secondary"
                onClick={() => {
                  if (!isValid) return trigger(); //needed for error messages to check if last url is valid, this will trigger validateUrl in the SocialMediaPlatformEdit component
                  // append({ platform: "", url: "" });
                }}
              >
                Add
              </Button>
            </div>
          ) : (
            <div
              //II, VIEW PLATFORM
              className="flex items-center justify-between"
            >
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

// fields from useFieldArray and getValues() serve different purposes and contain different data:

// REACT HOOK FORM-fields and getValues have the same values
// fields from useFieldArray:
// Contains metadata and helper methods for each field
// Includes properties like
// id
// , key, and helper methods
// Used for rendering and managing the list of fields
// Structure: Array<{ id: string, [key: string]: any }>
// getValues():
// Returns the current form values as a plain JavaScript object
// Contains only the form values without any metadata
// Structure: { fieldArrayName: Array<{...}> }
