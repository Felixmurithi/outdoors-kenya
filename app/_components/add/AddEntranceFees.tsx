import Input from "@/app/_components/generic/Input";
import { useState } from "react";
import {
  useFieldArray,
  useFormContext,
  useFormState,
  useWatch,
} from "react-hook-form";
import Select from "../generic/Select";
import FormRow from "../generic/FormRow";
import { CURRENCIES } from "@/app/_lib/constants";
import { EntranceFeesFormValues } from "@/app/_lib/basicDetailsSchema";

type FieldsArray = {
  fees: EntranceFeesFormValues;
};

const fees = {
  currency: ["kes", "kes", "usd"],
  adult: [600, 20, 30],
  child: [250, 10, 15],
};

export default function AddEntranceFees() {
  const { register, control, clearErrors } = useFormContext<FieldsArray>();
  const [disabled, setDisabled] = useState(false);

  const {
    isValid,
    errors: { fees: feesErrors },
  } = useFormState<FieldsArray>({ control, name: "fees" });

  //validate input is number-  Firefox/browsers allows non numbers for input type nummber
  const validateNumberInput = (value: number | string): true | string => {
    const numValue = typeof value === "string" ? parseFloat(value) : value;
    return isNaN(numValue) ? "Please enter a valid number" : true;
  };

  console.log(feesErrors);

  return (
    <FormRow
      label="Access Fees"
      error={`${
        feesErrors && feesErrors?.adult && feesErrors?.child
          ? "all inputs are required"
          : ""
      }`}
    >
      <div className="grid md:gap-4 gap-1 grid-rows-4 text-sm mobile:text-base gap-y-6">
        <div
          //charge type
          className="grid grid-cols-subgrid col-span-4 bg-deepSeaweed-tints-700 items-center"
        >
          <span className="w-fit">Visitor</span>
          <span className="w-fit mx-auto">Kenyan</span>
          <span className="w-fit mx-auto">Resident</span>
          <span className="w-fit mx-auto">Non-Resident</span>
        </div>

        <div className="grid grid-cols-subgrid col-span-4 border-b-2 pb-2">
          <span>Currency</span>
          {fees.currency.map((_, index) => (
            <div key={index} className="w-fit mx-auto">
              <Select
                label="currency"
                disabled={disabled}
                defaultValue={fees.currency[index]}
                // classes="max-w-full" //select button will be contained in grid cell
                options={CURRENCIES}
                register={{
                  ...register(`fees.currency.${index}`),
                }}
                error={feesErrors?.currency?.[index] ? true : false}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-subgrid col-span-4 border-b-2 pb-2">
          <span>Adult</span>
          {fees.adult.map((_, index) => (
            <div key={index} className="max-w-32 mx-auto">
              <Input
                defaultValue={fees.adult[index]}
                disabled={disabled}
                type="number"
                register={{
                  ...register(`fees.adult.${index}`, { valueAsNumber: true }),
                }}
                error={feesErrors?.adult?.[index] ? true : false}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-subgrid col-span-4 border-b-2 items-center">
          <span>Child</span>
          {fees.child.map((_, index) => (
            <div key={index} className="max-w-32 mx-auto">
              <Input
                disabled={disabled}
                defaultValue={fees.child[index]}
                type="number"
                register={{
                  ...register(`fees.child.${index}`),
                }}
                error={feesErrors?.child?.[index] ? true : false}
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
// isvalid and errors rteturn values for the form  for the whole form
// fields only work with useFieldArray

//AI Failure
// cantb get grid ro gap
