import { useFieldArray } from "react-hook-form";
import Button from "@/app/_components/generic/Button";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import AddWayPoint from "@/app/_components/add/AddWayPoint";
import { useEffect, useState } from "react";
import Link from "next/link";

import { DefaultValuesType } from "@/_components/add/AddLocationForm";
import { get } from "http";

export default function AddAcessPoint({
  control,
  register,
  watch,
  trigger,
}: any) {
  const [form, setForm] = useState(null);
  const { fields, append, prepend, remove, update } = useFieldArray({
    name: "accessPoints",
    control,
  });

  return (
    <FormRow label="Acess Points" classes="flex flex-col">
      {fields.map((field, index) => (
        <div key={field.id}>
          <div>
            <Input
              register={{
                ...register(`accessPoints.${index}.accessPoint.address`),
              }}
              placeholder="Address"
              label="Address"
            />
            <Input
              register={{
                ...register(`accessPoints.${index}.accessPoint.url`, {
                  required: "THis field is required",
                }),
              }}
              placeholder="place url"
              label="place url"
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
            <p>through</p>

            <div>
              <iframe
                width="200"
                height="100"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/streetview?location=-0.7243%2C36.6811&key=AIzaSyAKM9w18iUfX_Eesf7AfAKhFFbraZSDDKk"
              ></iframe>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => {
          //trigger validation before addding a new acess point
          trigger();
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
