"use client";
import { useFieldArray, useForm, useFormState } from "react-hook-form";
import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import FileInput from "@/app/_components/generic/FileInput";
import Button from "@/app/_components/generic/Button";
import SelectCurrency from "@/app/_components/generic/SelectCurrency";
import AddWayPoint from "@/app/_components/add/AddWayPoint";
import AddAccessPoints from "@/app/_components/add/AddAccessPoints";
import { useState } from "react";
import Stepper from "../generic/Stepper";
import AddBasicDetails from "./AddBasicDetails";

const defaultValues = {
  accessRoutes: [
    {
      accessRoute: {
        startingPoint: {
          address: "",
          url: "",
        },
        entryPoint: {
          address: "",
          url: "",
        },
      },
      wayPoints: [
        // {
        //   address: "",
        //   url: "",
        // },
      ],
    },
  ],
};

export type DefaultValuesType = typeof defaultValues;

//enerla lo cation county. constiuency, neraby landmarks
// activities allowed
//charges, when opening ancclosing
// relevant images- gates
// acess points ,location of map cordinates, routes points. for each activity if more than included.
//

// const outdoorActivities "Picnic", "Hiking", "Running", "Cycling"

export default function AddLocationForm() {
  const [activeStep, setActiveStep] = useState(0);

  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,

    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    reValidateMode: "onBlur",
  });

  return (
    <div className="flex flex-col gap-16">
      <div className="w-[60%] mx-auto">
        <Stepper
          steps={["Basic Details", "Acess Routes", "Popular Routes"]}
          activeStep={activeStep}
        />
      </div>
      {
        [
          <AddBasicDetails key={0} />,
          <AddAccessPoints
            key={1}
            control={control}
            register={register}
            watch={watch}
            trigger={trigger}
            // getValues={getValues}
            // setValue={setValue}
          />,
        ][activeStep]
      }
    </div>
  );
}

// I want a input of acess points with adress and link, should be up to 3 acess points, use the useArrya hoook of react hook forms to add  the acess points

//flex iotems stretch

// always add space inside of the container

// always add space inside of the container

// if find urself trring to add comments between the react html elements, u need to compose that components

//DOCS
//u neeed to to do thei examples and read
// libraries have rules dont try fit your own- read docs
//practice docs- dont assume rules.

// RESULTs
//new conepts will always be anxiety raising especilly when they are not getting through overc ome that by reducing the maount of time spent reaading to

//INSIGHT
//summarsise the google directiosn api- this tyo the AI gives toom much of a summary
// div is a block level and span is inline

//REACT HOOK FORM
//useWatch will trigger a rerender after each input change and update the watched value
//usewatch will only rerender in the components its subcribed under
//useWatch does not have an onBlur option

//getValues will obly get the inputs as they are
//on blur is necessary on revalidate and the revalidateMode option allows for the option to not revalidate before submitting.
//get Values and set values do not trigger rerenders

//TODO
//useFormnState vs Formstate
// shoould I design for 240 pisxel screens
