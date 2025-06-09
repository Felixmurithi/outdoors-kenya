import { useFieldArray } from "react-hook-form";
import Button from "@/app/_components/generic/Button";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import AddWayPoint from "@/app/_components/add/AddWayPoint";
import { useState } from "react";
import Link from "next/link";

import { DefaultValuesType } from "@/_components/add/AddLocationForm";

export default function AddAcessPoint({ control, register, watch }: any) {
  const [form, setForm] = useState(null);
  const { fields, append, prepend, remove, update } = useFieldArray({
    name: "accessPoints",
    control,
  });

  console.log(fields);

  return (
    <FormRow label="Acess Points" classes="flex flex-col">
      {fields.map((field, index) => (
        <>
          <div></div>
          <div key={field.id}>
            <Input
              register={{
                ...register(`accessPoints.${index}.accessPoint.address`),
              }}
              placeholder="Address"
              label="Address"
            />
            <Input
              register={{
                ...register(`accessPoints.${index}.accessPoint.placeId`),
              }}
              placeholder="PlaceId"
              label="PlaceId"
            />
            <AddWayPoint
              nestIndex={index}
              register={register}
              control={control}
            />
          </div>

          <div>
            <p>starting adress</p>
            <p>finsishing ppoint </p>

          
          </div>
        </>
      ))}

      <Button
        type="button"
        onClick={() => {
          // setForm(index)
          append({
            accessPoint: {
              address: "",
              placeId: "",
            },
          });
        }}
      >
        Add Acess Point
      </Button>
    </FormRow>
  );
}

// adding an acess point in
