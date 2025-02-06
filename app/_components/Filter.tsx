"use client";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import Select from "@/app/_components/Select";
import { SetStateAction } from "react";

type FilterProps = {
  setFilter: React.Dispatch<
    SetStateAction<{
      search: string;
      location: string;
      type: string;
      date: string;
      startDate: string;
      endDate: string;
      happening: string;
      card: boolean;
      free: boolean;
    }>
  >;
  filter: {
    search: string;
    location: string;
    type: string;
    date: string;
    startDate: string;
    endDate: string;
    happening: string;
    card: boolean;
    free: boolean;
  };

  search: () => void;
};

function Filter({ filter, setFilter, search }: FilterProps) {
  const eventTypes = [
    "football",
    "athletics",
    "hiking",
    "running",
    "calisthenics",
    "martial arts & boxing",
  ];
  const locations = ["all", "nairobi", "mombasa"];
  const filterDurations = ["all", "today", "this-week", "this-month"];

  function filterDisplay() {
    setFilter((filters) => {
      return { ...filters, card: !filters.card };
    });
  }
  function filterLocation(e: { target: HTMLInputElement }) {
    setFilter((filters) => {
      return { ...filters, location: e.target.value };
    });
  }
  return (
    <div className="grid gap-4 border p-2 mobile:p-4">
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-4 text-sm mobile:text-base ">
        <div className="flex gap-3 flex-wrap mobile:flex-nowrap">
          <div className="flex w-full">
            🔍 <Input>event</Input>
          </div>

          <div className="w-full flex justify-between h-8 mobile:gap-3">
            <Select
              text={"event type"}
              classes={"w-24 mobile:w-28"}
              options={eventTypes}
            />
          </div>
        </div>
      </div>

      <div className="flex text-sm mobile:text-base flex-wrap mobile:flex-nowrap justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6 mobile:flex-nowrap"></div>
      </div>
    </div>
  );
}

export default Filter;
