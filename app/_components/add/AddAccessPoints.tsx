import { useFieldArray, useFormState, useWatch } from "react-hook-form";
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
}: // getValues,
// setValue,
any) {
  const [form, setForm] = useState(null);
  const { fields, append, prepend, remove, update } = useFieldArray({
    name: "accessPoints",
    control,
  });

  const { errors, isValid } = useFormState({ control });

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // function setFormValue(value: string) {
  //   setValue;
  // }

  // const values = getValues("accessPoints");
  // console.log(values);

  const values = useWatch({
    control,
    name: "accessPoints",
  });

  console.log(values);

  return (
    <FormRow label="Access Points">
      <div className="grid gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border  shadow-md py-4 rounded-md px-8"
          >
            <div className="grid gap-8">
              <FormRow label="Starting Point" nested>
                <div className="flex gap-4">
                  <Input
                    // setValue={setValue}
                    // input={`accessPoints.${index}.accessPoint.address`}
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
              <FormRow label="Access Point" nested>
                <div className="flex gap-4">
                  <Input
                    // setValue={setValue}
                    // input={`accessPoints.${index}.accessPoint.address`}
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

            <div>
              {values[index].wayPoints.map(
                (wayPoint: { address: string }) => wayPoint.address
              )}

              {/* <iframe
                width="200"
                height="100"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/streetview?location=-0.7243%2C36.6811&key=AIzaSyAKM9w18iUfX_Eesf7AfAKhFFbraZSDDKk
                
                
                https://www.google.com/maps/embed/v1/directions
  ?key={apiKey}
  &origin={values[index].wayPoints[0].address.replace(" ", "+")}
  &destination=Telemark+Norway
  &avoid=tolls|highways
                "
              ></iframe> */}
            </div>
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

//INSIGHT
// the form is only meant to accept known routes, if this was user facing it would have included a google places search API. Therefore should not be worried abouyt layout shifts in the embed iframe

// TODO

//acorewect access color to use
//delete and change key
