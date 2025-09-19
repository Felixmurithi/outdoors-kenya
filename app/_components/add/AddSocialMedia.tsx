"use client";

import { Fragment } from "react";
import PlatformEdit from "./PlatformEdit";
import Button from "@/app/_components/generic/Button";
import Error from "@/app/_components/generic/Error";
import FormRow from "@/app/_components/generic/FormRow";
import ButtonGroup from "./ButtonGroup";
import { useSocialMediaForm } from "../../hooks/useSocialMediaForm";
import { SocialMediaIcon } from "./SocialMediaIcons";

// COMPONENT
export default function AddSocialMedia() {
  const {
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
  } = useSocialMediaForm();

  //SAVE PLATFORM
  async function savePlatform(index: number) {
    //1. trigger validation manually
    const inputsValid = await trigger(`socialLinks.${index}`);

    if (!inputsValid) return;

    setEditingIndex(null);

    const currentPlatform = getValues(`socialLinks.${index}.platform`);
    setAvailablePlatforms((prev) => prev.filter((p) => p !== currentPlatform));
    return true;
  }

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
              <div className="flex gap-4">
                {fields.length > 1 && (
                  <Button style="transparent" onClick={() => remove(index)}>
                    Remove
                  </Button>
                )}

                <Button style="secondary" onClick={() => savePlatform(index)}>
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div
              //II, VIEW PLATFORM
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <SocialMediaIcon platform={socialLinks[index].platform} />
                <span className="truncate">{socialLinks[index].url}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <ButtonGroup
                    onSave={() => savePlatform(index)}
                    onEdit={async () => {
                      if (editingIndex !== null) {
                        const isValid = await trigger(
                          `socialLinks.${editingIndex}`
                        );

                        if (!isValid) return;
                      }

                      const currentPlatform = getValues(
                        `socialLinks.${index}.platform`
                      );

                      setAvailablePlatforms((prev) => [
                        ...prev,
                        currentPlatform,
                      ]);

                      setEditingIndex(index);
                    }}
                    onRemove={() => {
                      const removedPlatform = socialLinks[index]?.platform;
                      if (removedPlatform) {
                        setAvailablePlatforms((prev) => [
                          ...prev,
                          removedPlatform,
                        ]);
                      }
                      if (fields.length === 1) {
                        append({ platform: "", url: "" });
                      }
                      remove(index);
                    }}
                    isEditing={editingIndex === index}
                    hasMultipleFields={fields.length > 1}
                  />
                </div>
              </div>
            </div>
          )}
        </Fragment>
      ))}

      {availablePlatforms.length > 0 && (
        <Button
          // className="text-deepSeaweed-tints-600 bg-accent-orange-50 font-semibold text-lg "
          className="mx-auto bg-amber-300 hover:bg-amber-400"
          style="icon"
          onClick={async () => {
            if (editingIndex !== null) {
              const validEntry = await savePlatform(editingIndex);
              if (!validEntry) return;
            }
            if (availablePlatforms.length >= 1) {
              //fields.length works because editing index starts at 0
              setEditingIndex(fields.length);
              append({
                platform: "",
                url: "",
              });
            }
          }}
        >
          <div className="flex gap-2 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="rounded"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
            <span>Add New Platform</span>
          </div>
        </Button>
      )}
    </FormRow>
  );
}

// was thinking about how to display the added links, after searching how to do list and image upload row look like I found inspiration in using icons and  a table format with a grey background

// fields from useFieldArray and getValues() serve different purposes and contain different data:

// REACT HOOK FORM

//// fields from useFieldArray:
// Contains metadata and helper methods for each field
// Includes properties like id , key, and helper methods
// Used for rendering and managing the list of fields
// Structure: Array<{ id: string, [key: string]: any }>

//trigger vs errors
//trigger is used to trigger validation manually, onChange revalidation occurs only after clicking submit, before that i has to be done manually.

//Isvalid vs errors
//https://github.com/react-hook-form/react-hook-form/issues/10250#issuecomment-1506622216 -  isvalid is updatedo on validate and not

// awiawait trigger vs trigger, when u need to get the result of the validation after triggering u need to await otherwise the value u store will be a promise

// test features while coding to make your thinking easier

//thinking of wether to include svgs in my file or add them directlyh to teh code
