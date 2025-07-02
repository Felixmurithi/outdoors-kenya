import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import { useForm } from "react-hook-form";
import AddEntranceFees from "@/app/_components/add/AddEntranceFees";

export default function AddBasicDetails() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    reValidateMode: "onBlur",
  });

  return (
    <form className="grid gap-8">
      <FormRow label="Basic Details">
        <div className="flex gap-4 flex-wrap">
          <Input
            register={{ ...register("basic.name") }}
            placeholder="Name"
            label="Name"
          />
          <Input
            register={{ ...register("basic.county") }}
            placeholder="County"
            label="County"
          />
          <Input
            register={{ ...register("basic.locality") }}
            placeholder="Locality"
            label="Locality"
          />
        </div>
      </FormRow>
      <FormRow label="Acces Fees"></FormRow>
      <AddEntranceFees control={control} register={register} />
    </form>
  );
}
