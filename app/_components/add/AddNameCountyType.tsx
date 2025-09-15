import { useFormContext, useFormState } from "react-hook-form";

import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import Select from "../generic/Select";
import { KENYA_COUNTIES, PARK_TYPES } from "@/app/_lib/constants";

type FormData = {
  basic: {
    name: string;
    county: string;
    type: string;
  };
};

export default function AddNameCountyLocality() {
  const { register, control, clearErrors } = useFormContext<FormData>();

  // ts error without the FormData type when destructuring
  const {
    isValid,
    errors: { basic: basicErrors },
  } = useFormState({
    control,
    name: "basic",
  });

  console.log(basicErrors);

  return (
    <FormRow
      label="Basic Details"
      error={basicErrors ? "all inputs are required" : ""}
    >
      <div className="flex gap-4 flex-wrap space-y-4">
        <Input
          register={{
            ...register("basic.name"),
          }}
          placeholder="Name"
          defaultValue={"Karura Forest"}
          label="Name"
          error={basicErrors?.name ? true : false}
        />

        <div className="grid">
          <label htmlFor="county">County</label>
          <Select
            id="county"
            defaultValue="nairobi"
            label="select"
            register={{ ...register("basic.county", { required: true }) }}
            options={KENYA_COUNTIES}
            error={basicErrors?.county ? true : false}
          />
        </div>
        <div className="grid">
          <label htmlFor="type">Type</label>
          <Select
            id="type"
            defaultValue="forest reserve"
            label="select"
            register={{ ...register("basic.type", { required: true }) }}
            options={PARK_TYPES}
            error={basicErrors?.type ? true : false}
          />
        </div>
      </div>
    </FormRow>
  );
}

//Valdiataion happens on submit
// if u have styles that crsh in twialiwnd add the one u want priprtised after the less one

//INSIGHT
// its more effeciient to copy code than to ask AI toi write it

// ZOD vs Valibot
// https://www.mwskwong.com/blog/migrating-from-zod-to-valibot-a-comparative-experience
//https://www.youtube.com/watch?v=U9PYyMhDc_k
// difefrence between zod and zod mini is small, valibot works similar to zod mini means its tree shakeabele
// https://react-hook-form.com/docs/useform#resolver
