import { useFormState } from "react-hook-form";

import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";

export default function AddNameCountyLocality({
  register,
  control,
  clearErrors,
}: any) {
  const { isValid, errors } = useFormState({ control, name: "basic" });

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const error = errors.basic?.[name];
    if (error) {
      // Reset the error
      //   errors.basic[name] = null;
      clearErrors(`basic.${name}`);
    }
  };

  // console.log(errors);

  return (
    <FormRow label="Basic Details" error="all inputs are required">
      <div className="flex gap-4 flex-wrap">
        <Input
          register={{ ...register("basic.name", { required: true }) }}
          placeholder="Name"
          label="Name"
          className={errors.basic?.name ? "border-red-500" : ""}
          handleFocus={handleFocus}
        />
        <Input
          register={{ ...register("basic.county") }}
          placeholder="County"
          label="County"
          className={errors.basic?.county ? "border-red-500" : ""}
          handleFocus={handleFocus}
        />
        <Input
          register={{ ...register("basic.locality") }}
          placeholder="Locality"
          label="Locality"
          className={errors.basic?.locality ? "border-red-500" : ""}
          handleFocus={handleFocus}
        />
      </div>
    </FormRow>
  );
}

//Valdiataion happens on submit
