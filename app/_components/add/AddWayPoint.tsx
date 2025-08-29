import { useFieldArray, useFormState, useWatch } from "react-hook-form";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import Button from "../generic/Button";
import IconText from "../generic/IconText";

export default function AddWayPoint({
  nestIndex,
  register,
  control,
  trigger,
}: any) {
  const { fields, append, prepend, remove, update } = useFieldArray({
    control,
    name: `accessRoutes.${nestIndex}.wayPoints`,
  });

  const { errors, isValid } = useFormState({
    control,
    name: `accessRoutes.${nestIndex}.wayPoints`,
  });
  const values = useWatch({
    control,
    name: `accessRoutes`,
  });

  return (
    <div className="grid gap-6">
      <FormRow label="Way Point" nested>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-4">
            <Input
              register={{
                ...register(
                  `accessRoutes.${nestIndex}.wayPoints.${index}.address`,
                  {
                    required: "This field is required",
                  }
                ),
              }}
              placeholder="address"
              label="address"
            />
            <Input
              register={{
                ...register(
                  `accessRoutes.${nestIndex}.wayPoints.${index}.url`,
                  {
                    required: "This field is required",
                  }
                ),
              }}
              placeholder="url"
              label="url"
            />
          </div>
        ))}
      </FormRow>
      <Button
        style="icon"
        onClick={() => {
          if (!isValid) return trigger(); //needed for error messages
          append({
            address: "",
            url: "",
          });
        }}
        className="hover:bg-deepSeaweed-tints-700"
      >
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-deepSeaweed-shades-200"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
          <span className="text-deepSeaweed-shades-200 font-semibold">
            add way point
          </span>
        </div>
      </Button>
    </div>

    /*************  ✨ Windsurf Command ⭐  *************/
    /*******  b5a599b9-cde2-4c47-b583-5748a883b627  *******/
  );
}

// when using the usefieldArray, an field array

// registering way points with the default valuie as an array object, example  wayPouintys wayPoints: [{  address: "", placeId: "", }, ],
// <Input{...register(`accessPoints.${nestIndex}.wayPoints.0.address`)} placeholder="Address" label="Address"/>

//INSIGHT
//make ur comments wordeed in a way taht u can search doc s in english

// DONE
//spacing,add icon  add butonn color, , hover bg color
