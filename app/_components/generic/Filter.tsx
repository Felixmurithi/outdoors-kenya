"use client";
import Input from "@/app/_components/generic/Input";
import Select from "@/app/_components/generic/Select";

type FilterProps = {
  setFilter: React.Dispatch<
    React.SetStateAction<{
      search: string;
      type: string;
    }>
  >;
};

function Filter({ setFilter }: FilterProps) {
  const eventTypes = ["hiking", "camping", "safari"];

  return (
    <div className="flex gap-4 flex-wrap">
      <div className="flex-1">
        <Input
          label="Search Events"
          placeholder="Search events..."
          // onChange={(e) => setFilter(prev => ({ ...prev, search: e.target.value }))}
        />
      </div>
      <div>
        <Select
          text="Select Type"
          options={eventTypes}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFilter((prev) => ({ ...prev, type: e.target.value }))
          }
        />
      </div>
    </div>
  );
}

export default Filter;
