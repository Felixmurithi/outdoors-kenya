"use client";
import Button from "@/app/_components/Button";
import Tag from "@/app/_components/Tag";

type EventProp = {
  event: {
    name: string;
    location: string;
    images: string[];
    description: string;
    type: string;
    date: string;
    time: string;
    public: string;
    slots: number;
  };
};

export default function Card({ event }: EventProp) {
  // const { id, name, location, coordinates, images } = site;
  return (
    <figure className="border rounded-sm pb-4">
      <div className="w-[90%] m-auto grid gap-4">
        <div>
          <h3>{event.name}</h3>
          <p className="opacity-50 text-sm ">{event.location}</p>
        </div>
        <img
          src={event.images[0]}
          alt={`explore image`}
          className="justify-self-center rounded-sm w-full"
        />
        <p className="opacity-50 w-fit">{event.description}</p>
        <div className="text-sm">
          <p className="font-bold">{event.date}</p>
          <p className="opacity-50">{event.time}</p>
        </div>
        <div className=" max-w-[80%] text-sm  flex flex-wrap ml-auto gap-2">
          <Tag>{event.slots}</Tag>
        </div>

        <Button link="events/type/id" type="icon">
          see More
        </Button>
      </div>
    </figure>
  );
}
