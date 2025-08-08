import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import { useForm } from "react-hook-form";
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
//     currencies: ["", "", ""],
//     adult: ["", "", ""],
//     child: ["", "", ""],
//   },
// };

const defaultValues = {
  socialLinks: [{ platform: " ", url: " " }],
};

export default function AddBasicDetails() {
  const {
    register,
    control,
    clearErrors,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    reValidateMode: "onBlur",
  });

  // console.log(errors);

  return (
    <form
      className="grid  gap-8 mb-4"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="grid gap-16 lg:gap-24">
        <AddNameCountyLocality
          register={register}
          control={control}
          clearErrors={clearErrors}
        />

        <AddSocialMedia
          control={control}
          handleSubmit={handleSubmit}
          register={register}
          trigger={trigger}
          setValue={setValue}
        />
        <AddEntranceFees
          control={control}
          register={register}
          clearErrors={clearErrors}
        />
      </div>

      <Button type="submit" style="secondary" className="ml-auto mr-2">
        Continue
      </Button>
    </form>
  );
}

//INSIGHT
// errors should only be logged on submit
