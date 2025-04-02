"use client";
import { useFieldArray, useForm } from "react-hook-form";
import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import FileInput from "@/app/_components/generic/FileInput";
import Button from "@/app/_components/generic/Button";
import SelectCurrency from "../generic/SelectCurrency";

//enerla lo cation county. constiuency, neraby landmarks
// activities allowed
//charges, when opening ancclosing
// relevant images- gates
// acess points ,location of map cordinates, routes points. for each activity if more than included.
//

// const outdoorActivities "Picnic", "Hiking", "Running", "Cycling"

export default function AddLocationForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      accessPoints: [
        {
          address: "",
          link: "",
        },
      ],
      basic: {
        name: "",
        county: "",
        locality: "",
      },
      charges: {
        kenyan: {
          currency: "",
          adult: "",
          child: "",
        },
        resident: {
          currency: "",
          adult: "",
          child: "",
        },
        nonResident: {
          currency: "",
          adult: "",
          child: "",
        },
      },
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "accessPoints",
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* name, details, levenat links */}
      <FormRow label="Basic Details" classes="flex ">
        <Input {...register("basic.name")} placeholder="Name" label="Name" />
        <Input
          {...register("basic.county")}
          placeholder="County"
          label="County"
        />
        <Input
          {...register("basic.locality")}
          placeholder="Locality"
          label="Locality"
        />
      </FormRow>
      {/* type of location - grounds,trails, picnics, running trails - can habe to type of venues */}
      <FormRow label="Acess Points" classes="border-t pb-2">
        {fields.map((field, index) => (
          <div key={field.id} className="  gap-2 flex">
            <Input
              {...register(`accessPoints.${index}.address`)}
              placeholder="Address"
              label="Address"
            />
            <Input
              {...register(`accessPoints.${index}.link`)}
              placeholder="Link"
              label="Link"
            />
            <Button
              classes="self-end"
              type="button"
              onClick={() => remove(index)}
            >
              ❌
            </Button>
          </div>
        ))}
        {fields.length < 3 && (
          <Button
            type="button"
            onClick={() => append({ address: "", link: "" })}
          >
            Add Access point
          </Button>
        )}
      </FormRow>

      <div className="grid">
        <h4>Charges</h4>
        <FormRow label="Kenyan">
          <SelectCurrency
            register={register("charges.kenyan.currency")}
            id="kenyan"
          />
          <Input
            {...register("charges.kenyan.adult")}
            placeholder="Adult"
            label="Adult"
          />
          <Input
            {...register("charges.kenyan.child")}
            placeholder="Child"
            label="Child"
          />
        </FormRow>
        <FormRow label="Resident">
          <SelectCurrency
            register={register("charges.resident.currency")}
            id="resident"
          />
          <Input
            {...register("charges.resident.adult")}
            placeholder="Adult"
            label="Adult"
          />
          <Input
            {...register("charges.resident.child")}
            placeholder="Child"
            label="Child"
          />
        </FormRow>
        <FormRow label="Non-Resident">
          <SelectCurrency
            register={register("charges.nonResident.currency")}
            id="nonResident"
          />
          <Input
            {...register("charges.nonResident.adult")}
            placeholder="Adult"
            label="Adult"
          />
          <Input
            {...register("charges.nonResident.child")}
            placeholder="Child"
            label="Child"
          />
        </FormRow>
      </div>
      <FormRow label="Relevant Images">
        <FileInput num={0} classes={"sm:w-2/5"} />
      </FormRow>
      <Button type="submit">Submit</Button>
    </form>
  );
}

// I want a input of acess points with adress and link, should be up to 3 acess points, use the useArrya hoook of react hook forms to add  the acess points

//flex iotems stretch

// always add space inside of the container

// always add space inside of the container
