import { useForm, useFieldArray } from "react-hook-form";

const AccessPointsForm = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      accessPoints: [
        {
          address: "",
          link: "",
        },
      ],
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Access Points</h2>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>Address:</label>
          <input {...register(`accessPoints.${index}.address`)} />
          <label>Link:</label>
          <input {...register(`accessPoints.${index}.link`)} />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ address: "", link: "" })}>
        Add Access Point
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};
