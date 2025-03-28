"use client";
// I tried building my own form and failed. this is the only way

import { useForm, useFieldArray } from "react-hook-form";

import Button from "@/app/_components/generic/Button";
import FormRow from "@/app/_components/generic/FormRow";
import Input from "@/app/_components/generic/Input";
import FileInput from "@/app/_components/generic/FileInput";
import { useEffect, useState } from "react";
import { addEvent } from "@/app/_utils/action";
import { DatePicker, defaultTheme, Provider } from "@adobe/react-spectrum";
import { getLocalTimeZone, today, now } from "@internationalized/date";

// name, details, levenat links
//type of location - grounds,trails, picnics, running trails - can habe to type of venues
//enerla lo cation county. constiuency, neraby landmarks
// activities allowed
//charges, w hen opening ancclosing
// relevant images- gates
// acess points ,location of map cordinates, routes points. for each activity if more than included.
//

export default function AddLocationForm() {
  const [guidelines, setGuidelines] = useState([""]);
  const [free, setFree] = useState(false);
  const [priceGuidelines, setPriceGuidelines] = useState([["", ""]]);
  const [blobs, setBlobs] = useState([""]);
  const [date, setDate] = useState(now(getLocalTimeZone()));

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const {
    fields,
    append,
    prepend,
    remove: removeArray,
    swap,
    move,
    insert,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  function add(setter: React.Dispatch<React.SetStateAction<string[]>>) {
    setter((prev) => [...prev, ""]);
  }

  /**
   * Removes the last element of the array managed by the setter function. If the array has one element, it is not removed.
   * @param setter the setter function of the state
   */
  function remove(setter: React.Dispatch<React.SetStateAction<string[]>>) {
    setter((prev) =>
      prev.filter((_, i) => {
        console.log(i, prev.length);

        return prev.length !== i + 1;
      })
    );
  }

  // function handleImageChange(e, i) {
  //   if (e.target.files && e.target.files[0]) {
  //     const imgURL = URL.createObjectURL(e.target.files[0]);
  //     console.log(imgURL);
  //     setBlobs((imgUrls: string[] | string) => {
  //       return (imgUrls[i] = imgURL);
  //     });
  //     //;
  //   }
  // }

  // useEffect(
  //   function () {
  //     return blobs.forEach((blob) => URL.revokeObjectURL(blob));
  //   },
  //   [blobs]
  // );

  function addEvent(formData: {}) {
    console.log(formData);
  }
  const array = [""];
  array[2] = "hello";
  console.log(array);

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(addEvent)}>
      <FormRow label="title" error={errors.title?.message?.toString()}>
        <Input
          id={"title"}
          name="title"
          reactHooKFormValidate={{
            ...register("title", {
              required: "location name is required",
            }),
          }}
        >
          event name
        </Input>

        {fields.map((field, index: any) => (
          <div key={field.id}>
            <input
              {...register(`items.${index}.item`)}
              placeholder="Item"
              required
            />
            <input
              {...register(`items.${index}.cost`)}
              placeholder="Cost (optional)"
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        {fields.length < 10 && (
          <button type="button" onClick={() => append({ item: "", cost: "" })}>
            Add Item
          </button>
        )}
      </FormRow>
      {/* <FormRow label="Date and time" id="dateTime">
        <Provider theme={defaultTheme}>
          <DatePicker
            aria-labelledby="dateTime"
            granularity="minute"
            value={date}
            onChange={setDate}
            hideTimeZone
          />
        </Provider>
      </FormRow> */}
      <FormRow label="Location">
        <Input id={"location"} name={"Location"}>
          event location
        </Input>
      </FormRow>
      <FormRow label="description">
        <Input
          type="textarea"
          classes={"h-24"}
          id={"description"}
          name={"description"}
        >
          describe the activities
        </Input>
      </FormRow>
      <FormRow label="guidelines" classes={"border px-2 py-2"}>
        <div className="w-full grid grid-cols-[1fr_auto] gap-8">
          <ul className="grid gap-3 list-decimal pl-4">
            {Array.from({ length: guidelines.length }, (x, i) => {
              return (
                <li className="list-item pl-2" key={i}>
                  <Input
                    value={guidelines[i]}
                    id={"guidelines"}
                    name={`guideline-${i + 1}`}
                    onChange={(e: { target: HTMLInputElement }) =>
                      setGuidelines((prev) => {
                        prev[i] = e.target.value;
                        return prev;
                      })
                    }
                  >
                    event guideline
                  </Input>
                </li>
              );
            })}
          </ul>

          {guidelines.length < 3 ? (
            <Button
              type="icon"
              onClick={() => add(setGuidelines)}
              classes={"w-fit text-deepSeaweed-tints-100"}
            >
              ➕
            </Button>
          ) : (
            <Button
              type="icon"
              onClick={() => remove(setGuidelines)}
              classes={"w-fit text-deepSeaweed-tints-100"}
            >
              ➖
            </Button>
          )}
        </div>
      </FormRow>

      {/* <FormRow label="Event Fees" classes={"px-6 py-4 border"}>
        <div className="w-full grid gap-4">
          <div className="flex min-w-full">
            <label htmlFor="" className="opacity-60 w-full">
              Is this event free?
            </label>
            <Input
              type="checkbox"
              id={"pricing"}
              checked={free}
              onChange={(e) => {
                setFree(e.target.checked);
                setPriceGuidelines(1);
              }}
            >
              event guidelines
            </Input>
          </div>
          {!free && (
            <div className="grid gap-2 px-6 list-decimal ">
              <h4>Fees</h4>
              {Array.from({ length: priceGuidelines.length }, (x, i) => {
                return (
                  <div className="flex gap-2" key={i}>
                    <Input>0.00</Input>
                    <Input
                      id={"free"}
                      name={`amount-${i + 1}`}
                      key={i}
                      type="number"
                    >
                      item
                    </Input>
                  </div>
                );
              })}
              {priceGuidelines < 5 ? (
                <Button
                  type="icon"
                  onClick={() => add(setPriceGuidelines)}
                  classes={"w-fit"}
                >
                  ➕
                </Button>
              ) : (
                <Button
                  type="icon"
                  onClick={() => remove(setPriceGuidelines)}
                  classes={"w-fit"}
                >
                  ➕
                </Button>
              )}
            </div>
          )}
        </div>
      </FormRow> */}
      <FormRow label="images" classes={"gap-10"}>
        <FileInput
          id="coverImage"
          num={0}
          cover={true}
          type="file"
          classes={"h-36 bg-stone-200"}
          setBlobs={setBlobs}
          // handleChange={handleImageChange}
          reactHooKFormValidate={{
            ...register("coverImage", {
              required: "This field is required",
            }),
          }}
        >
          Cover Image
        </FileInput>

        <div className="grid grid-cols-2 items-stretch">
          {Array.from({ length: 4 }, (x, i) => {
            console.log(i);
            return (
              <FileInput
                key={i}
                id="coverImage"
                num={i + 1}
                cover={true}
                type="file"
                classes={"h-36 bg-stone-200"}
                setBlobs={setBlobs}
                // name="cover-image"
                // handleChange={handleImageChange}
                reactHooKFormValidate={{
                  ...register("coverImage", {
                    required: "This field is required",
                  }),
                }}
              >
                image {i + 2}
              </FileInput>
            );
          })}
        </div>
      </FormRow>

      {/* <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div> */}

      <Button type="secondary">Submit</Button>
    </form>
  );
}

// get warning message before submission to say  that, they will  not be able to chane pricing later

// REQUIRED FIELD
// {...register("fullName", { required: "THis field is required" })}

//PASSWORD
// {...register("password", {
//   required: "THis field is required",
//   minLength: {
//     value: 8,
//     message: "Password needs to be atleast 8 characters",
//   },
// })}

//PASSWORD- CONFIRM
//  {...register("passwordConfirm", {
//   required: "THis field is required",
//   validate: (value) =>
//     value === getValues().password || " Passwords need to match",
// })}

//EMAIL
// {...register("email", {
//   required: "THis field is required",
//   pattern: {
//     value: /\S+@\S+\.\S+/,
//     message: "provide a required email",
//   },
// })}

// DATE
// date string
