"use client";
import { useEffect, useState } from "react";
import Card from "@/app/_components/Card";
import Filter from "../../_components/Filter";
import Button from "../Button";

function Events({ events }) {
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
    setAllEvents((prev) => events);

    if (filter.location) {
      setAllEvents((filterevenets) => {
        return filterevenets.filter((eventtofilter) => {
          return eventtofilter.location === filter.location;
        });
      });
    }
    if (filter.free) {
      setAllEvents((filterevenets) => {
        return filterevenets.filter((eventtofilter) => {
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
        {allevents.map((event, i) => (
          <Card key={i} event={event} />
        ))}
      </section>
    </>
  );
}

export default Events;
