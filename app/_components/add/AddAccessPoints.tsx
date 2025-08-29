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
    name: "accessRoutes",
    control,
  });

  const { errors, isValid } = useFormState({ control });

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // function setFormValue(value: string) {
  //   setValue;
  // }

  // const values = getValues("accessRoutes");
  // console.log(values);

  const values = useWatch({
    control,
    name: "accessRoutes",
  });

  return (
    <FormRow label="Access Route">
      <div className="grid gap-6">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border  shadow-md py-4 rounded-md px-8"
          >
            <div className="grid gap-8">
              <FormRow label="Access Route" nested>
                <div className="flex gap-4">
                  <Input
                    // setValue={setValue}
                    // input={`accessPoints.${index}.accessPoint.address`}
                    register={{
                      ...register(
                        `accessRoutes.${index}.accessRoute.startingPoint.address`,
                        {
                          required: "This field is required",
                        }
                      ),
                    }}
                    placeholder="adress"
                    label="starting point"
                  />
                  <Input
                    register={{
                      ...register(
                        `accessRoutes.${index}.accessRoute.startingPoint.url`,
                        {
                          required: "This field is required",
                        }
                      ),
                    }}
                    placeholder="place url"
                    label="place url"
                  />
                </div>
                <div className="flex gap-4">
                  <Input
                    // setValue={setValue}
                    // input={`accessPoints.${index}.accessPoint.address`}
                    register={{
                      ...register(
                        `accessRoutes.${index}.accessRoute.entryPoint.address`,
                        {
                          required: "This field is required",
                        }
                      ),
                    }}
                    placeholder="address"
                    label="entry point"
                  />
                  <Input
                    register={{
                      ...register(
                        `accessRoutes.${index}.acesssRoute.entryPoint.url`,
                        {
                          required: "This field is required",
                        }
                      ),
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
              {/* {values[index].wayPoints.map(
                (wayPoint: { address: string }) => wayPoint.address
              )} */}

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
          // className="text-deepSeaweed-tints-600 bg-accent-orange-50 font-semibold text-lg "
          className="mx-auto bg-amber-300 hover:bg-amber-400"
          style="icon"
          onClick={() => {
            if (!isValid) return trigger(); //needed for error messages
            append({
              accessPoint: {
                address: "",
                placeId: "",
              },
            });
          }}
        >
          <div className="flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="rounded"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
            <span>Add Access Point</span>
          </div>
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
//make input aligend at tyhe bottom
