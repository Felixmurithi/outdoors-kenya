"use client"
import { useState } from "react";
import { useEffect } from "react";
// FILTER
// county, distance  from ur loctaion. longest trail length
export function Filter({ locations, setLocations }: { locations: LocationCardProps[]; setLocations: (locations: LocationCardProps[]) => void }) {
  const counties = [...new Set(locations.map(location => location.county))];
  const longestTrailLengths = [
    { value: "1-5", label: "1-5" },
    { value: "5-10", label: "5-10" },
    { value: "10-15", label: "10-15" },
    { value: "15-20", label: "15-20" },
    { value: "20-25", label: "20-25" },
    { value: "25-30", label: "25-30" },
    { value: "30-40", label: "30-40" },
  ];
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedLongestTrailLength, setSelectedLongestTrailLength] = useState("");
  const [closestToUser, setClosestToUser] = useState(false);

  const handleCountyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCounty(event.target.value);
  };
  const handleLongestTrailLengthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLongestTrailLength(event.target.value);
  };
  const handleClosestToUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClosestToUser(event.target.checked);
  };

  const filteredLocations = locations.filter((location) => {
    const filters = [
      selectedCounty ? location.county === selectedCounty : true,
      selectedLongestTrailLength
        ? location.longestTrailLength >= Number(selectedLongestTrailLength.split("-")[0]) &&
          location.longestTrailLength <= Number(selectedLongestTrailLength.split("-")[1])
        : true,
      closestToUser ? location.distanceFromUser < 10 : true,
    ];
    return filters.every((filter) => filter);
  });

  useEffect(() => {
    setLocations(filteredLocations);
  }, [filteredLocations, setLocations]);

  return (
    <div>
      <Select
        options={counties}
        value={selectedCounty}
        onChange={handleCountyChange}
        placeholder="County"
      />
      <Select
        options={longestTrailLengths}
        value={selectedLongestTrailLength}
        onChange={handleLongestTrailLengthChange}
        placeholder="Longest trail length"
      />
      <input
        type="checkbox"
        checked={closestToUser}
        onChange={handleClosestToUserChange}
      />
      <label></label>
    </div>
  );
}