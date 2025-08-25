"use client";

import { Fragment, useState } from "react";
import {
  useFieldArray,
  useFormState,
  useFormContext,
  useWatch,
} from "react-hook-form";
import PlatformView from "./PlatformView";
import PlatformEdit from "./PlatformEdit";

import Input from "../generic/Input";
import validateUrl from "@/app/_utils/validatePlatform";
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

  async function handleAddPlatform(index: number) {
    {
      //need to trigger valdiation manually to get the error object with errors
      const allLinksValid = await trigger(`socialLinks.${index}`);
      console.log(allLinksValid);
      return;

      if (!allLinksValid) return; //needed for error messages to check if last url is valid, this will trigger validateUrl in the SocialMediaPlatformEdit component

      console.log(allLinksValid);

      const currentPlatform = getValues(`socialLinks.${index}.platform`);
      setAvailablePlatforms((prev) =>
        prev.filter((p) => p !== currentPlatform)
      );

      // if (currentPlatform) {
      //   handleAddPlatform(currentPlatform);
      // }
      setEditingIndex(index + 1);
      append({ platform: "", url: "" });
    }
  }

  // get form state
  const { isValid, errors: { socialLinks: socialLinksErrors = {} } = {} } =
    useFormState({
      control,
      name: "socialLinks",
    });

  // // Without defaultValue (always an array), The watched value will be undefined initially
  const socialLinks = useWatch({
    control,
    name: "socialLinks",
    defaultValue: [],
  });
  // get available platforms by filtering the platforms added to the fields array
  // const handleAddPlatform = (platform: string) => {

  //   // Your existing append logic here
  //   append({ platform, url: "" });
  // };
  // console.log(isValid, getValues("socialLinks"), fields);
  console.log(isValid, socialLinksErrors);

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
                platformValue={socialLinks[index]?.platform}
              />

              {socialLinksErrors?.[index]?.url?.message ||
              socialLinksErrors?.[index]?.platform?.message ? (
                <Error
                  //below is an example of how to use an empty string  to avoid uinsng the  if exists operator
                  error={
                    (socialLinksErrors?.[index]?.url?.message ||
                      socialLinksErrors?.[index]?.platform?.message) ??
                    ""
                  }
                />
              ) : null}
              <Button
                disabled={
                  !!(
                    socialLinksErrors?.[index]?.url?.message ||
                    socialLinksErrors?.[index]?.platform?.message
                  )
                }
                style="secondary"
                onClick={() => handleAddPlatform(index)}
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
                  src={`/social-icons/${socialLinks[index].platform}.svg`}
                  height={50}
                  width={50}
                  alt=""
                />
                <span>{socialLinks[index].url}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    style="text"
                    className="text-red-700"
                    onClick={() => {
                      setEditingIndex(index);
                      setUrlInput(socialLinks[index]?.url || "");
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    style="text"
                    onClick={(e) => {
                      remove(index);
                      // Add the platform back to available platforms
                      const removedPlatform = socialLinks[index]?.platform;
                      if (removedPlatform) {
                        setAvailablePlatforms((prev) => [
                          ...prev,
                          removedPlatform,
                        ]);
                      }
                      // If we're removing the last item, add a new empty one
                      if (fields.length === 1) {
                        append({ platform: "", url: "" });
                      }
                    }}
                  >
                    Remove
                  </Button>
                </div>
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

//Isvalid vs errors
//https://github.com/react-hook-form/react-hook-form/issues/10250#issuecomment-1506622216 -  isvalid is updatedo on validate and not
