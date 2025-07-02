import Input from "@/app/_components/generic/Input";
import { useState } from "react";
import { useFieldArray, useFormState, useWatch } from "react-hook-form";
import Select from "../generic/Select";

const fees = {
  currencies: ["", "", ""],
  adult: ["", "", ""],
  child: ["", "", ""],
};
// the strcuture of the registered object needs to lookm like this fees[curencies, adults, children ] will only work with a field array which is not necessary in thi case

export default function AddEntranceFees({ control, register }: any) {
  const [disabled, setDisabled] = useState(false);
  const values = useWatch({ control, name: "fees" });

  // the fees should be passed as an array with 3 nested arrays with fees, the two arrays map two rows with the nested arrays as data
  return (
    <div className="grid gap-2 grid-cols-4 grid-rows-4 text-sm mobile:text-base ">
      <div
        //charge type
        className="grid-cols-subgrid grid  col-span-3 col-start-2"
      >
        <span>Kenyan</span>
        <span>Resident</span>
        <span>Non-Resident</span>
      </div>

      <div className="grid gap-2 row-start-2 row-end-5">
        <span>Currency</span>
        <span>Adult</span>
        <span>Child</span>
      </div>

      <div className="grid grid-cols-subgrid col-span-3">
        {fees.currencies.map((_, index) => (
          <div key={index}>
            <Select
              // classes="max-w-full" //select button will be contained in grid cell
              options={["Kshs", "USD"]}
              register={{
                ...register(`fees.currency.${index}`, {
                  required: "This field is required",
                  disabled,
                }),
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-subgrid col-span-3">
        {fees.adult.map((_, index) => (
          <div key={index} className="mx-2">
            <Input
              type="number"
              register={{
                ...register(`fees.currency.${index}`, {
                  required: "This field is required",
                  disabled,
                }),
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-subgrid col-span-3">
        {fees.child.map((_, index) => (
          <div key={index} className="mx-2">
            <Input
              type="number"
              register={{
                ...register(`fees.currency.${index}`, {
                  required: "This field is required",
                  disabled,
                }),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

//NOTE
// some nuances in programming like css grid tracks and how the work

//TODO- object to arrays, check values ar line 15 undefined for a moment when rendering
