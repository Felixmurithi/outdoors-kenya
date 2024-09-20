import Button from "@/app/_components/Button";
import FormRow from "../../_components/FormRow";
import Input from "../../_components/Input";

export default function Add() {
  return (
    <main>
      <h2>Add Event</h2>
      <form>
        <FormRow label="title">
          <Input id={"title"}>event name</Input>
        </FormRow>
        <FormRow label="Date $ time">
          <Input id={"date"}>Date</Input>
          <Input id={"time"}>Time</Input>
        </FormRow>
        <FormRow label="Location">
          <Input id={"location"}>event location</Input>
        </FormRow>
        <FormRow label="description">
          <Input type="textarea" classes={"h-24"} id={"description"}>
            describe the activities
          </Input>
        </FormRow>
        <FormRow label="guidelines">
          <Input id={"guidelines"}>event guidelines</Input>
        </FormRow>
        <FormRow label="Pricing">
          <Input type="checkbox" id={"pricing"}>
            event guidelines
          </Input>
          <Input type="number" id={"amount"}>
            amount
          </Input>
        </FormRow>
        <FormRow label="images">
          <Input type="file" classes={"h-48 bg-stone-200"}>
            drop files or click to upload
          </Input>
          <div className="grid grid-cols-2">
            <Input type="file" classes={"h-24 bg-stone-200"}>
              +
            </Input>
            <Input type="file" classes={"h-24 bg-stone-200"}>
              +
            </Input>
            <Input type="file" classes={"h-24 bg-stone-200"}>
              +
            </Input>
            <Input type="file" classes={"h-24 bg-stone-200"}>
              +
            </Input>
          </div>
        </FormRow>
        <Button type="secondary" s>
          Submit
        </Button>
      </form>
    </main>
  );
}

// get warning message before submission to say  that, they will  not be able to chnage pricing later
