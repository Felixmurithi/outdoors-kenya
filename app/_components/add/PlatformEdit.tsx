"use client";

import { useFormContext, useFormState } from "react-hook-form";
import Input from "../generic/Input";
import validateUrl, { validatePlatform } from "@/app/_utils/validateUrlAndPath";
import Select from "../generic/Select";
import Button from "../generic/Button";

export default function PlatformEdit({
  index,
  availablePlatforms,
  platformValue,
}: {
  index: number;
  availablePlatforms: string[];
  platformValue: string;
}) {
  const { register, getValues, trigger } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Select
        className="self-start"
        label="platform"
        register={{
          ...register(`socialLinks.${index}.platform`, {
            required: "Platform is required",
          }),
        }}
        options={availablePlatforms}
      />

      <Input
        type="url"
        register={{
          ...register(`socialLinks.${index}.url`, {
            required: "URL is required",

            //validate URL
            validate: (value: string) => {
              const urlValid = validateUrl(value);
              if (urlValid !== true) return urlValid;
              return validatePlatform(
                value,
                value === "website"
                  ? ""
                  : platformValue === "x"
                  ? ["twitter", "x"]
                  : platformValue
              );
            },
          }),
        }}
      />
    </div>
  );
}

//INSIGHTSs
// PROP DERILLING VSD CONTEXT
// need to use context to avoid prop drilling, however that may cause unneccessary re-renders when the value being suncribed to changes, that value in this case maybe

//REACT HOOK FORM REGISTER
//The register function from React Hook Form returns an object with properties that need to be spread onto the input/select element. Here's why:What register() returns:It returns an object with properties like name, onChange, onBlur, and refThese properties are needed to connect the input to React Hook Form, The spreading ensures all the necessary props are properly attached to the underlying input/select element, allowing React Hook Form to track and manage its state.
// register("fieldName") returns something like:
// {
//   name: "fieldName",
//   ref: refFunction,
//   onChange: handleChange,
//   onBlur: handleBlur
// }

//INSIGHTSs
// PROP DERILLING VSD CONTEXT
// need to use context to avoid prop drilling, however that may cause unneccessary re-renders when the value being suncribed to changes, that value in this case maybe

//REACT HOOK FORM REGISTER
//The register function from React Hook Form returns an object with properties that need to be spread onto the input/select element. Here's why:What register() returns:It returns an object with properties like name, onChange, onBlur, and refThese properties are needed to connect the input to React Hook Form, The spreading ensures all the necessary props are properly attached to the underlying input/select element, allowing React Hook Form to track and manage its state.
// register("fieldName") returns something like:
// {
//   name: "fieldName",
//   ref: refFunction,
//   onChange: handleChange,
//   onBlur: handleBlur
// }
