"use client";

import LocationCard from "@/app/_components/explore/LocationCard";
import { type LocationCardProps } from "@/app/_components/explore/LocationCard";
import Select from "../generic/Select";

type LocationsProps = {
  locations: LocationCardProps[];
};

export default function Locations({ locations }: LocationsProps) {
  return (
    <div>
      <div>
        <Select options={locations.map((location) => location.name)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>
    </div>
  );
}
