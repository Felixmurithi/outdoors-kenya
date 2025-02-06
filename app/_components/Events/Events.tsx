"use client";
import { useEffect, useState } from "react";
import Card from "@/app/_components/Card";
import Select from "@/app/_components/Select";
import Filter from "../Filter";
import Button from "../Button";

type EventsProp = {
  events: {
    name: string;
    location: string;
    images: string[];
    description: string;
    type: string;
    date: string;
    time: string;
    public: string;
    slots: number;
  }[];
};

const timelines = ["today", "this week", "this month"];

function Events({ events }: EventsProp) {
  const [allevents, setAllEvents] = useState(events);
  const [filter, setFilter] = useState({
    search: "",
    location: "",
    type: "",
    date: "",
    startDate: "",
    endDate: "",
    happening: "",
    card: true,
    free: false,
  });

  function search() {
    setAllEvents(() => events);

    if (filter.location) {
      setAllEvents((filterevenets: any) => {
        return filterevenets?.filter((eventtofilter: any) => {
          return eventtofilter.location === filter.location;
        });
      });
    }
    if (filter.free) {
      setAllEvents((filterevenets: any) => {
        return filterevenets.filter((eventtofilter: any) => {
          return eventtofilter.free === true;
        });
      });
    }
  }
  //grid rows used when u have a scroll component to give the parent of teht compoinent height
  return (
    <section className="px-8 grid">
      <div className=" relative">
        <Select text={"filter date"} />
        {/* <Button link="events/add" type="icon">
        ➕
      </Button> */}
        <div className="absolute bottom-0 top-0 left-0 right-0 overflow-y-auto grid md:grid-cols-4 mobile:grid-cols-2">
          {allevents.map((event: any, i: number) => (
            <Card key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
//TS
//WHY TS
/// u need ts because of the documentation and testing capability ensuring that u pass the right types and not have ur program break  and this is especially important when working with colleages, u get to dicuyment yur work
//INline functiosn automatically inferred

//TO-DO
//ts object properties props need to gbe of th samer name?

// CHILD COMPONENTS
//n declare all tyupes passed to child components
// copy the types inferred on parents components on hover
// make them optional where necessary

// Test Driven Development
