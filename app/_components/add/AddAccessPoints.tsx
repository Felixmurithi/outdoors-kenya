import { useFieldArray, useFormState } from "react-hook-form";
import Button from "@/app/_components/generic/Button";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import AddWayPoint from "@/app/_components/add/AddWayPoint";
import { useEffect, useState } from "react";
import Link from "next/link";
import IconText from "../generic/IconText";

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

  const { errors, isValid } = useFormState({ control });

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <FormRow label="Access Points">
      <div className="grid gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border  shadow-md py-4 rounded-md px-8"
          >
            <div className="grid gap-8">
              <FormRow label="Access Point" nested>
                <div className="flex gap-4">
                  <Input
                    register={{
                      ...register(`accessPoints.${index}.accessPoint.address`, {
                        required: "This field is required",
                      }),
                    }}
                    placeholder="Address"
                    label="Address"
                  />
                  <Input
                    register={{
                      ...register(`accessPoints.${index}.accessPoint.url`, {
                        required: "This field is required",
                      }),
                    }}
                    placeholder="place url"
                    label="place url"
                  />
                </div>
              </FormRow>
              <AddWayPoint
                nestIndex={index}
                register={register}
                control={control}
                trigger={trigger}
              />
            </div>

            {/* <div>
            <p>starting adress</p>
            <p>finsishing ppoint </p>
            <p>through</p>

            <div>
              <iframe
                width="200"
                height="100"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/streetview?location=-0.7243%2C36.6811&key=AIzaSyAKM9w18iUfX_Eesf7AfAKhFFbraZSDDKk
                
                
                https://www.google.com/maps/embed/v1/directions
  ?key={apiKey}
  &origin=Oslo+Norway
  &destination=Telemark+Norway
  &avoid=tolls|highways
                "
              ></iframe>
            </div>
          </div> */}
          </div>
        ))}

        <Button
          type="button"
          onClick={() => {
            //trigger validation before addding a new acess point
            console.log(isValid);
            append({
              accessPoint: {
                address: "",
                placeId: "",
              },
            });
          }}
        >
          <IconText
            iconLink="/icons/add.svg"
            classes="text-accent-color-100 hover:bg-accent-orange-50 font-bold "
          >
            add access point
          </IconText>
        </Button>
      </div>
    </FormRow>
  );
}

// TODO
//acorewect access color to use
//delete and change key
