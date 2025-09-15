"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { basicDetailsSchema } from "@/app/_lib/basicDetailsSchema";

import AddEntranceFees from "@/app/_components/add/AddEntranceFees";
import toast from "react-hot-toast";
import AddNameCountyType from "./AddNameCountyType";
import Button from "../generic/Button";
import AddSocialMedia from "./AddSocialMedia";

import { createUpdateBasicDetailsAction } from "@/app/_lib/action";
import { type BasicDetailsFormValues } from "@/app/_lib/basicDetailsSchema";
// Default values with placeholders
const defaultValues: BasicDetailsFormValues = {
  basic: { name: "", county: "nairobi", type: "forest reserve" },
  socialLinks: [{ platform: "instagram", url: "https://www.instagram.com" }],
  fees: {
    currency: ["kes", "kes", "usd"],
    adult: [600, 20, 30],
    child: [250, 10, 15],
  },
};

export default function AddBasicDetails({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) {
  const methods = useForm<BasicDetailsFormValues>({
    defaultValues,
    resolver: zodResolver(basicDetailsSchema),
  });

  const onSubmit = async (data: BasicDetailsFormValues) => {
    try {
      const result = await createUpdateBasicDetailsAction(data);
      console.log(result);
      toast.success("Location added successfully!");
    } catch (error) {
      console.error("Error creating location:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create location"
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid gap-8 mb-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="grid gap-16 lg:gap-24">
          <AddNameCountyType />
          <AddSocialMedia />
          <AddEntranceFees />
        </div>

        <Button type="submit" style="secondary" className="ml-auto mr-2">
          Continue
        </Button>
      </form>
    </FormProvider>
  );
}

//I found this out while trying to configure a resolver with React Hook Form, a Zod schema with enums doesn't work when I need to set a default as an empty string. There is a conflict because the empty string which is not part of the enum.
//The schema will work on the backend because u only need validation
//FYI: When u need to check for uniqueness of values, using a regular function might be more efficient than a validation library.  Do
