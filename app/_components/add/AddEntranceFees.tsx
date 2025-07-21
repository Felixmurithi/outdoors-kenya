import Input from "@/app/_components/generic/Input";
import { useState } from "react";
import { useFieldArray, useFormState, useWatch } from "react-hook-form";
import Select from "../generic/Select";
import FormRow from "../generic/FormRow";

type FormData = {
  fees: {
    currency: string[];
    adult: string[];
    child: string[];
  };
};

const fees = {
  currency: ["", "", ""],
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
  const {
    isValid,
    errors: { fees: feesErrors },
  } = useFormState<FormData>({ control, name: "fees" });

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
      <div className="grid md:gap-4 gap-1   grid-rows-4 text-sm mobile:text-base  gap-y-4  ">
        <div
          //charge type
          className="grid grid-cols-subgrid col-span-4 bg-deepSeaweed-tints-700 items-center"
        >
          <span className="w-fit">Visitor</span>
          <span className="w-fit mx-auto">Kenyan</span>
          <span className="w-fit mx-auto">Resident</span>
          <span className="w-fit mx-auto">Non-Resident</span>
        </div>

        <div className="grid grid-cols-subgrid col-span-4 border-b-2">
          <span>Currency</span>
          {fees.currency.map((_, index) => (
            <div key={index} className="w-fit mx-auto">
              <Select
                label="currency"
                disabled={disabled}
                // classes="max-w-full" //select button will be contained in grid cell
                options={["Kshs", "USD"]}
                register={{
                  ...register(`fees.currency.${index}`, {
                    required: true,
                  }),
                }}
                error={feesErrors?.currency?.[index] ? true : false}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-subgrid col-span-4 border-b-2">
          <span>Adult</span>
          {fees.adult.map((_, index) => (
            <div key={index} className="max-w-32 mx-auto">
              <Input
                disabled={disabled}
                type="number"
                register={{
                  ...register(`fees.adult.${index}`, {
                    required: true,
                    valueAsNumber: true,
                    validate: (value: number) => {
                      if (isNaN(value)) {
                        return "Please enter a valid number";
                      }
                      return true;
                    },
                  }),
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
                type="number"
                register={{
                  ...register(`fees.child.${index}`, {
                    required: true,
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
// isvalid and errors rteturn values for the form  for the whole form
// fields only work with useFieldArray

//AI Failure
// cantb get grid ro gap
