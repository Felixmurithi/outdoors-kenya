"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AddEntranceFees from "@/app/_components/add/AddEntranceFees";
import toast from "react-hot-toast";
import AddNameCountyType from "./AddNameCountyType";
import Button from "../generic/Button";
import AddSocialMedia from "./AddSocialMedia";
import { createUpdateBasicDetailsAction } from "@/app/_lib/action";

// const defaultValues = {
//   name: "",
//   county: "",
//   locality: "",
//   fees: {
//     currencies: ["KES", "USD", "EUR"],
//     adult: ["", "", ""],
//     child: ["", "", ""],
//   },
//   socialLinks: [{ platform: "", url: "" }],
// };
// Default values with placeholders
const defaultValues = {
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/karuraforest",
    },
  ],
};

export default function AddBasicDetails({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) {
  const router = useRouter();
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    try {
      // Transform data to match the new schema

      // Use the new server action
      console.log(data);
      await createUpdateBasicDetailsAction(data);

      // Show success message
      toast.success("Location added successfully!");

      // Go to next step
      // setActiveStep(1);
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

//INSIGHT
// errors should only be logged on submit
