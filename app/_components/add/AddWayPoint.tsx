import { useFieldArray } from "react-hook-form";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import Button from "../generic/Button";
import IconText from "../generic/IconText";

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
    <div className="grid gap-2 ">
      <FormRow label="Way Point" nested>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-4">
            <Input
              register={{
                ...register(
                  `accessPoints.${nestIndex}.wayPoints.${index}.address`,
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
                  `accessPoints.${nestIndex}.wayPoints.${index}.url`,
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
      <Button type="button" onClick={() => append("hi")} classes="mt-2  ">
        <IconText
          iconLink="/icons/add.svg"
          classes="text-lunar-green-700 font-semibold hover:bg-lunar-green-50"
        >
          add way point
        </IconText>
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
