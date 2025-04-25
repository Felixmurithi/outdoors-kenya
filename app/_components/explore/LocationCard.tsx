"use client";

import Tag from "@/app/_components/generic/Tag";
import Link from "next/link";

export type LocationCardProps = {
  image: string;
  name: string;
  location: string;
  trails: number;
};

export default function LocationCard({
  location,
}: {
  location: LocationCardProps;
}) {
  return (
    <Link href="/explore/hiking-trails/1">
      <div className="flex flex-col rounded-lg shadow-lg hover:shadow-2xl">
        <img
          className="h-40 w-full object-cover"
          src={location.image}
          alt={location.name}
        />
        <div className="flex flex-col p-4">
          <h4 className="text-lg font-bold">{location.name}</h4>
          <p className="text-sm text-gray-600">{location.location}</p>
          <Tag>{location.trails} trails</Tag>
        </div>
      </div>
    </Link>
  );
}
