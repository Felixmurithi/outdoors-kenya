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
import { get } from "http";

const defaultValues = {
  accessPoints: [
    {
      accessPoint: {
        address: "",
        url: "",
      },
      wayPoints: [
        {
          address: "",
          url: "",
        },
      ],
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
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    trigger,

    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    reValidateMode: "onBlur",
  });

  // const { isValid } = useFormState({ control });

  console.log(isValid, errors);

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Function to be called when the form is submitted.
   * @param {Object} data - The form data.
   * @returns {Promise<void>}
   */
  /*******  21f59e80-3ce2-4a7a-910f-0be45b7a82f0  *******/ const onSubmit =
    async (data: any) => {
      console.log(data);
    };

  // const access = watch("accessPoints");
  // console.log(access);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-16">
      {/* name, details, levenat links */}
      <FormRow label="Basic Details" classes="flex ">
        <Input
          register={{ ...register("basic.name") }}
          placeholder="Name"
          label="Name"
        />
        <Input
          register={{ ...register("basic.county") }}
          placeholder="County"
          label="County"
        />
        <Input
          register={{ ...register("basic.locality") }}
          placeholder="Locality"
          label="Locality"
        />
      </FormRow>

      <AddAccessPoints
        control={control}
        register={register}
        watch={watch}
        trigger={trigger}
      />

      <Button type="submit">Submit</Button>
    </form>
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

//REACT HOOK FORM
//usew wtach will trigger a rerender after each input change and update the watched value
//getValues will omly get the inputs as they are
//on blur is necessary on revalidate and the revalidateMode option allows for the option to not revalidate before submitting.

//TODO
//useFormnState vs Formstate
