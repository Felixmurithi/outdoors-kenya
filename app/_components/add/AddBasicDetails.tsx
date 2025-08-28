import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import { FormProvider, useForm } from "react-hook-form";
import AddEntranceFees from "@/app/_components/add/AddEntranceFees";
import AddNameCountyLocality from "./AddNameCountyLocality";
import Button from "../generic/Button";
import AddSocialMedia from "./AddSocialMedia";

// const defaultValues = {
//   basic: {
//     name: "",
//     county: "",
//     locality: "",
//   },
//   fees: {
//     currencies: ["kk", "", ""],
//     adult: ["", "", ""],
//     child: ["", "", ""],
//   },
//   socialLinks: [{ platform: "ddd", url: "" }],
// };

const defaultValues = {
  socialLinks: [{ platform: "", url: "" }],
};

export default function AddBasicDetails({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) {
  const methods = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form
        className="grid  gap-8 mb-4"
        onSubmit={methods.handleSubmit((data) => console.log(data))}
      >
        <div className="grid gap-16 lg:gap-24">
          {/* <AddNameCountyLocality /> */}

          <AddSocialMedia />
          <AddEntranceFees />
        </div>

        <Button
          type="submit"
          style="secondary"
          className="ml-auto mr-2"
          onClick={() => setActiveStep(1)}
        >
          Continue
        </Button>
      </form>
    </FormProvider>
  );
}

//INSIGHT
// errors should only be logged on submit
