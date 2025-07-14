import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import { useForm } from "react-hook-form";
import AddEntranceFees from "@/app/_components/add/AddEntranceFees";
import AddNameCountyLocality from "./AddNameCountyLocality";
import Button from "../generic/Button";

export default function AddBasicDetails() {
  const {
    register,
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onBlur",
  });

  // console.log(errors);

  return (
    <form
      className="grid gap-16 lg:gap-24"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <AddNameCountyLocality
        register={register}
        control={control}
        clearErrors={clearErrors}
      />
      <AddEntranceFees
        control={control}
        register={register}
        clearErrors={clearErrors}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

//INSIGHT
// errors should only be logged on submit
