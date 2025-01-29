"use client";
import { useEffect, useState } from "react";
import Card from "@/app/_components/Card";
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
  return (
    <>
      <Filter filter={filter} setFilter={setFilter} search={search} />

      <Button link="events/add" type="icon">
        ➕
      </Button>

      <section className="max-w-full grid lg:grid-cols-4 mobile:grid-cols-2 rounded-md">
        {allevents.map((event: any, i: number) => (
          <Card key={i} event={event} />
        ))}
      </section>
    </>
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
