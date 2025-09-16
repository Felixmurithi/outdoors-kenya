import { useFormContext, useFormState } from "react-hook-form";

import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import Select from "../generic/Select";
import { KENYA_COUNTIES, PARK_TYPES } from "@/app/_lib/constants";

type FormData = {
  name: string;
  county: string;
  type: string;
};

export default function AddNameCountyLocality() {
  const { register, control, clearErrors } = useFormContext<FormData>();

  // ts error without the FormData type when destructuring
  const {
    isValid,
    errors: { name, county, type },
  } = useFormState({
    control,
    name: ["name", "county", "type"],
  });

  console.log(name, county, type);

  return (
    <FormRow
      label="Basic Details"
      error={name || county || type ? "all inputs are required" : ""}
    >
      <div className="flex gap-6 flex-wrap">
        <Input
          register={{
            ...register("name"),
          }}
          placeholder="Name"
          label="Name"
          error={name ? true : false}
          className="flex-1 min-w-20"
        />

        <div className="flex-1  flex-col justify-between flex self-stretch">
          <label htmlFor="county">County</label>
          <Select
            id="county"
            label="select"
            register={{ ...register("county") }}
            options={KENYA_COUNTIES}
            error={county ? true : false}
          />
        </div>
        <div className="flex-1 flex-col justify-between flex self-stretch">
          <label htmlFor="type">Type</label>
          <Select
            id="type"
            defaultValue="forest reserve"
            label="select"
            register={{ ...register("type") }}
            options={PARK_TYPES}
            error={type ? true : false}
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
