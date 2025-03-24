"use client";
import { useState } from "react";
import Card from "@/app/_components/generic/Card";
import Select from "@/app/_components/generic/Select";

type EventsProp = {
  events: Array<{
    id: string;
    name: string;
    description: string;
    location: string;
    date: string;
    time: string;
    images: string[];
    items: Array<{
      item: string;
      cost: string;
    }>;
  }>;
};

function Events({ events }: EventsProp) {


  return (
    <div className="grid gap-8">
      {/* <Filter setFilter={setFilter} /> */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
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
