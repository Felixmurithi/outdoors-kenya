import { useFieldArray } from "react-hook-form";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import Button from "../generic/Button";

export default function AddWayPoint({
  nestIndex,
  register,
  control,
}: {
  nestIndex: number;
  register: any;
  control: any;
}) {
  const { fields, append, prepend, remove, update } = useFieldArray({
    control,
    name: `accessPoints.${nestIndex}.wayPoints`,
  });
  return (
    <FormRow label="Way Points" classes="flex flex-col">
      {fields.map((field, index) => (
        <div key={field.id}>
          <div>
            <Input
              register={{
                ...register(`accessPoints.${nestIndex}.wayPoints.${index}`),
              }}
              placeholder="Address"
              label="Address"
            />
            <Input
              register={{
                ...register(`accessPoints.${nestIndex}.wayPoints.${index}`),
              }}
              placeholder="PlaceId"
              label="PlaceId"
            />
          </div>
        </div>
      ))}
      <Button type="button" onClick={() => append("hi")} classes="mt-2">
        Add Way Point
      </Button>
    </FormRow>

    /*************  ✨ Windsurf Command ⭐  *************/
    /*******  b5a599b9-cde2-4c47-b583-5748a883b627  *******/
  );
}

// when using the usefieldArray, an field array

// registering way points with the default valuie as an array object, example  wayPouintys wayPoints: [{  address: "", placeId: "", }, ],
// <Input{...register(`accessPoints.${nestIndex}.wayPoints.0.address`)} placeholder="Address" label="Address"/>

//INSIGHT
//make ur comments wordeed in a way taht u can search doc s in english
