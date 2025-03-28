"use client";
import Button from "@/app/_components/generic/Button";
import Tag from "@/app/_components/generic/Tag";
import Image from "next/image";
import { Event } from "@/app/_lib/types";

type EventProp = {
  event: Event;
};

function Card({ event }: EventProp) {
  return (
    <div className="grid gap-2 bg-white rounded-sm p-4">
      <div>
        <div className="flex justify-between mb-2">
          <h3>{event.name}</h3>
          <p className="opacity-50 text-sm">{event.location}</p>
        </div>
        <div className="relative w-full h-36">
          <Image
            src={event.images[0]}
            alt={`${event.name} image`}
            fill
            className="rounded-sm object-cover"
          />
        </div>
        <p className="opacity-50 w-fit">{event.description}</p>
        <div className="text-sm">
          <p className="font-bold">{event.date}</p>
          <p className="opacity-50">{event.time}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {/* {event.items.map((item) => (
          <Tag key={item.item}>{item.item}</Tag>
        ))} */}
      </div>
      <Button>View Details</Button>
    </div>
  );
}

export default Card;
