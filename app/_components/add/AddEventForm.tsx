"use client";
// I tried building my own form and failed. this is the only way

import { useForm, useFieldArray } from "react-hook-form";
import Input from "@/app/_components/generic/Input";
import Select from "@/app/_components/generic/Select";
import FileInput from "@/app/_components/generic/FileInput";
import FormRow from "@/app/_components/generic/FormRow";
import Button from "@/app/_components/generic/Button";

export default function AddEventForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      items: [{ item: "", cost: "" }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "items", // unique name for your Field Array
    }
  );

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id} className="flex">
          <Input
            {...register(`items.${index}.item`)}
            placeholder="Item"
            
          />
          <Input
            {...register(`items.${index}.cost`)}
            placeholder="Cost (optional)"
          />
          {fields.length > 1 && (
            <Button type="button" onClick={() => remove(index)}>
              Remove
            </Button>
          )}
        </div>
      ))}
      {fields.length < 10 && (
        <Button type="button" onClick={() => append({ item: "", cost: "" })}>
          Add Item
        </Button>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}
