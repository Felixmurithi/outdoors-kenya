import { useFormContext, useFormState } from "react-hook-form";

import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import Select from "../generic/Select";

type FormData = {
  basic: {
    name: string;
    county: string;
    type: string;
  };
};
const PARK_TYPES = [
  "Forest Reserve",
  "Community Park",
  "Private Park",
  "National Park",
  "Game Reserve",
];
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

  return (
    <FormRow
      label="Basic Details"
      error={basicErrors ? "all inputs are required" : ""}
    >
      <div className="flex gap-4 flex-wrap space-y-4">
        <Input
          register={{
            ...register("basic.name", {
              required: true,
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 50,
                message: "Name must not exceed 50 characters",
              },
            }),
          }}
          placeholder="Name"
          defaultValue={"Karura Forest"}
          label="Name"
          error={basicErrors?.name ? true : false}
        />
        <Input
          register={{
            ...register("basic.county", {
              required: true,
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Name must not exceed 20 characters",
              },
            }),
          }}
          placeholder="County"
          defaultValue={"Nairobi"}
          label="County"
          error={basicErrors?.county ? true : false}
        />
        <div className="grid">
          <label htmlFor="type">Type</label>
          <Select
            id="type"
            defaultValue="Forest Reserve"
            label="Select Type"
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
