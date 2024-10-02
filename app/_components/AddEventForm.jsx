"use client";
import Button from "@/app/_components/Button";
import FormRow from "@/app/_components/FormRow";
import Input from "@/app/_components/Input";
import FileInput from "@/app/_components/FileInput";
import { useState } from "react";
import { addEvent } from "@/app/_utils/action";

const images = {
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  img5: "",
};

export default function EventForm() {
  const [guidelines, setGuidelines] = useState(1);
  const [free, setFree] = useState(false);
  const [priceGuidelines, setPriceGuidelines] = useState(1);
  const [images, setImages] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  });

  function addGuideline() {
    setGuidelines((prev) => prev + 1);
  }

  function addPriceGuideline() {
    if (priceGuidelines > 4) return;
    setPriceGuidelines((prev) => prev + 1);
  }

  function handleChange(e, img) {
    if (e.target.files && e.target.files[0]) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      console.log(imgURL);
      setImages((imgs) => {
        return { ...imgs, [img]: imgURL };
      });
      // URL.revokeObjectURL(imgURL);
    }
  }

  return (
    <form className="grid gap-6" action={addEvent}>
      <FormRow label="title">
        <Input id={"title"} name="title">
          event name
        </Input>
      </FormRow>
      <FormRow label="Date $ time">
        <Input id={"date"} name={"date"}>
          Date
        </Input>
        <Input id={"time"} name={"time"}>
          Time
        </Input>
      </FormRow>
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
            {Array.from({ length: guidelines }, (x, i) => {
              return (
                <li className="list-item pl-2" key={i}>
                  <Input id={"guidelines"} name={`guideline-${i + 1}`}>
                    event guideline
                  </Input>
                </li>
              );
            })}
          </ul>

          {guidelines < 10 && (
            <Button
              type="icon"
              onClick={addGuideline}
              classes={"w-fit text-deepSeaweed-tints-100"}
            >
              ➕
            </Button>
          )}
        </div>
      </FormRow>

      <FormRow label="Event Fees" classes={"px-6 py-4 border"}>
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
              {Array.from({ length: priceGuidelines }, (x, i) => {
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

              <Button type="icon" onClick={addPriceGuideline} classes={"w-fit"}>
                ➕
              </Button>
            </div>
          )}
        </div>
      </FormRow>
      <FormRow label="images">
        <div>
          <FileInput
            type="file"
            classes={"h-36 bg-stone-200"}
            name="img-1"
            onChange={(e) => handleChange(e, "img1")}
          >
            drop files or click to upload
          </FileInput>
          {images.img1 && (
            <img src={images.img1} alt="" width={"600px"} height={"60px"} />
          )}
        </div>
        <div className="grid grid-cols-2 items-stretch">
          <Input type="file" classes={" bg-deepSeaweed-tints-500"}>
            +
          </Input>
          <Input type="file" classes={" bg-stone-200"}>
            +
          </Input>
          <Input type="file" classes={"bg-stone-200"}>
            +
          </Input>
          <Input type="file" classes={" bg-stone-200"}>
            +
          </Input>
        </div>
      </FormRow>
      <Button type="secondary" s>
        Submit
      </Button>
    </form>
  );
}

// get warning message before submission to say  that, they will  not be able to chnage pricing later
