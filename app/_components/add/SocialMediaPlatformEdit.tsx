"use client";

import { useFormContext, useFormState } from "react-hook-form";
import Input from "../generic/Input";
import validateUrl from "@/app/_utils/validateUrl";
import Select from "../generic/Select";
import Button from "../generic/Button";

export default function SocialMediaPlatformEdit({
  index,
  SOCIAL_MEDIA_OPTIONS,
}: {
  index: number;
  SOCIAL_MEDIA_OPTIONS: string[];
}) {
  const { register, control, clearErrors, getValues, trigger } =
    useFormContext();

  return (
    <div>
      <Select
        label="Platform"
        {...register(`socialLinks.${index}.platform`)}
        options={SOCIAL_MEDIA_OPTIONS}
      />

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
  );
}

//INSIGHTSs
// need to use context to avoid prop drilling, however that may cause unneccessary re-renders when the value being suncribed to changes, that value in this case maybe
