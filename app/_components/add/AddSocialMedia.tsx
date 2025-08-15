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
import Error from "../generic/Error";

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

// COMPONENT
export default function AddSocialMedia() {
  // states
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(0);
  const [urlInput, setUrlInput] = useState("");
  const [availablePlatforms, setAvailablePlatforms] = useState<string[]>(
    Object.keys(platforms)
  );

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
  const handleAddPlatform = (platform: string) => {
    setAvailablePlatforms((prev) => prev.filter((p) => p !== platform));
    // Your existing append logic here
    // append({ platform, url: "" });
  };

  console.log(getValues("socialLinks"), fields);

  return (
    <FormRow label="Social Media Links">
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          {editingIndex === index ? (
            <div
              // I, ADD EDIT PLATFORM
              className="flex flex-col gap-4 shadow-md p-4"
            >
              <PlatformEdit
                index={index}
                availablePlatforms={availablePlatforms}
                platformValue={field.platform}
              />

              {socialLinksErrors?.[index]?.url?.message ? (
                <Error error={socialLinksErrors?.[index]?.url?.message} />
              ) : null}
              <Button
                disabled={!!socialLinksErrors?.[index]?.url?.message}
                style="secondary"
                onClick={() => {
                  if (!isValid) return trigger(); //needed for error messages to check if last url is valid, this will trigger validateUrl in the SocialMediaPlatformEdit component

                  const currentPlatform = getValues(
                    `socialLinks.${index}.platform`
                  );
                  if (currentPlatform) {
                    handleAddPlatform(currentPlatform);
                    append({
                      platform: currentPlatform,
                      url: getValues(`socialLinks.${index}.url`),
                    });
                  }

                  append({ platform: "", url: "" });
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
