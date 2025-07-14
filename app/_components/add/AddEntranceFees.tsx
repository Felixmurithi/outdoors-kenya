import Input from "@/app/_components/generic/Input";
import { useState } from "react";
import { useFieldArray, useFormState, useWatch } from "react-hook-form";
import Select from "../generic/Select";
import FormRow from "../generic/FormRow";

const fees = {
  currencies: ["", "", ""],
  adult: ["", "", ""],
  child: ["", "", ""],
};
// the strcuture of the registered object needs to lookm like this fees[curencies, adults, children ] will only work with a field array which is not necessary in thi case

export default function AddEntranceFees({
  control,
  register,
  clearErrors,
}: any) {
  const [disabled, setDisabled] = useState(false);
  const values = useWatch({ control, name: "fees" });

  // the fees should be passed as an array with 3 nested arrays with fees, the two arrays map two rows with the nested arrays as data
  const { isValid, errors } = useFormState({ control, name: "fees" });

  console.log(isValid);
  return (
    <FormRow label="Access Fees" error="all inputs are required">
      <div className="grid gap-1 grid-cols-[min-content_repeat(3, minmax(min-content, 1fr))]  grid-rows-4 text-sm mobile:text-base  ">
        <div
          //charge type
          className="grid-cols-subgrid grid  col-span-3 col-start-2"
        >
          <span>Kenyan</span>
          <span>Resident</span>
          <span>Non-Resident</span>
        </div>

        <div className="grid gap-2 row-start-1 row-span-4 text-stone-500 ">
          <span>Visitor</span>
          <span>Currency</span>
          <span>Adult</span>
          <span>Child</span>
        </div>

        <div className="grid grid-cols-subgrid col-span-3">
          {fees.currencies.map((_, index) => (
            <div key={index}>
              <Select
                label="currency"
                disabled={disabled}
                // classes="max-w-full" //select button will be contained in grid cell
                options={["Kshs", "USD"]}
                register={{
                  ...register(`fees.currency.${index}`, {
                    required: "This field is required",
                  }),
                }}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          {fees.adult.map((_, index) => (
            <div key={index} className="max-w-48">
              <Input
                disabled={disabled}
                type="number"
                register={{
                  ...register(`fees.adult.${index}`, {
                    required: "This field is required",
                  }),
                }}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          {fees.child.map((_, index) => (
            <div key={index} className="max-w-48">
              <Input
                disabled={disabled}
                type="number"
                register={{
                  ...register(`fees.child.${index}`, {
                    required: "This field is required",
                    valueAsNumber: true,
                    validate: (value: number) => {
                      if (isNaN(value)) {
                        return "Please enter a valid number";
                      }
                      return true;
                    },
                  }),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </FormRow>
  );
}

//NOTE
// some nuances in programming like css grid tracks and how the work

//TODO- object to arrays, check values ar line 15 undefined for a moment when rendering

//INSIGHT
// NaN is a number in js ts
