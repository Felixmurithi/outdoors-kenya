"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/app/_components/generic/Input";
import FormRow from "@/app/_components/generic/FormRow";
import FileInput from "@/app/_components/generic/FileInput";
import Tag from "@/app/_components/generic/Tag";

//enerla lo cation county. constiuency, neraby landmarks
// activities allowed
//charges, when opening ancclosing
// relevant images- gates
// acess points ,location of map cordinates, routes points. for each activity if more than included.
//

const outdoorActivities = ["Picnic", "Hiking", "Running", "Cycling"];

export default function AddLocationForm() {
  const { register, handleSubmit } = useForm();
  const [activities, setActivities] = useState([""]);

  const handleTagClick = (activity: string) => {
    const isSelected = activities.includes(activity);
    if (isSelected) {
      setActivities(activities.filter((t) => t !== activity));
    } else {
      setActivities([...activities, activity]);
    }
  };

  const onSubmit = async (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 pa">
      {/* name, details, levenat links */}

      <FormRow label="Basic Details" classes="flex ">
        <Input {...register("name")} placeholder="Name" />
        <Input {...register("details")} placeholder="Details" />
        <Input {...register("relevantLinks")} placeholder="Relevant Links" />
      </FormRow>
      {/* type of location - grounds,trails, picnics, running trails - can habe to type of venues */}
      <FormRow label="Type of Location">
        <select {...register("typeOfLocation")}>
          <option value="">Select Type of Location</option>
          <option value="grounds">Grounds</option>
          <option value="trails">Trails</option>
          <option value="picnics">Picnics</option>
          <option value="runningTrails">Running Trails</option>
        </select>
      </FormRow>
      <FormRow label="General Location">
        <Input {...register("location.county")} placeholder="County" />
        <Input
          {...register("location.constituency")}
          placeholder="Constituency"
        />
        <Input
          {...register("location.nearbyLandmarks")}
          placeholder="Nearby Landmarks"
        />
      </FormRow>
      <FormRow label="Activities Allowed">
        <div>
          {outdoorActivities.map((activity, i) => (
            <Tag
              key={i}
              color={activities.includes(activity) ? "green-300" : ""}
              onClick={() => handleTagClick(activity)}
            >
              {activity}
            </Tag>
          ))}
        </div>
        <input
          type="hidden"
          {...register("activities")}
          value={activities.join(",")}
        />
      </FormRow>
      <FormRow label="Charges">
        <Input {...register("charges.children")} placeholder="Children" />
        <Input
          {...register("charges.costBreakdown")}
          placeholder="Cost Breakdown"
        />
      </FormRow>
      <FormRow label="Relevant Images">
        <FileInput num={0} classes={"sm:w-2/5"} />
        <div className="grid grid-cols-2 gap-4 sm:w-3/5 place-items-center">
          <FileInput classes={"aspect-square h-40"} />
          <FileInput classes={"aspect-square h-40"} />
          <FileInput classes={"aspect-square h-40"} />
          <FileInput classes={"aspect-square h-40"} />
        </div>
      </FormRow>
    </form>
  );
}

//flex iotems stretch
// always add space inside of the container