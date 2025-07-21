import { useFormState } from "react-hook-form";

import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";

type FormData = {
  basic: {
    name: string;
    county: string;
    locality: string;
  };
};

export default function AddNameCountyLocality({
  register,
  control,
  clearErrors,
}: any) {
  // ts error without the FormData type when destructuring
  const {
    isValid,
    errors: { basic: basicErrors },
  } = useFormState<FormData>({
    control,
    name: "basic",
  });

  return (
    <FormRow label="Basic Details" error="all inputs are required">
      <div className="flex gap-4 flex-wrap">
        <Input
          register={{ ...register("basic.name", { required: true }) }}
          placeholder="Name"
          label="Name"
          error={basicErrors?.name ? true : false}
        />
        <Input
          register={{
            ...register("basic.county", { required: "This field is required" }),
          }}
          placeholder="County"
          label="County"
          error={basicErrors?.county ? true : false}
        />
        <Input
          register={{ ...register("basic.locality", { required: true }) }}
          placeholder="Locality"
          label="Locality"
          error={basicErrors?.locality ? true : false}
        />
      </div>
    </FormRow>
  );
}

//Valdiataion happens on submit
// if u have styles that crsh in twialiwnd add the one u want priprtised after the less one
