import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import Select from "@/app/_components/Select";

function Filter() {
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

  return (
    <section className="grid gap-4 border p-2 mobile:p-4">
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-4 text-sm mobile:text-base ">
        <div className="flex gap-3 flex-wrap mobile:flex-nowrap">
          <div className="flex w-full">
            🔍 <Input>event</Input>
          </div>

          <div className="w-full flex justify-between h-8 mobile:gap-3">
            <Select
              text={"location"}
              classes={"w-20 mobile:w-24 "}
              options={locations}
            />
            <Select
              text={"event type"}
              classes={"w-24 mobile:w-28"}
              options={eventTypes}
            />
          </div>
        </div>

        <Button type="transparent">Free</Button>
      </div>

      <div className="flex text-sm mobile:text-base flex-wrap mobile:flex-nowrap justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6 mobile:flex-nowrap">
          <div className="hidden mobile:flex">
            <Button type="icon">🔢</Button>
            <Button type="icon">1️⃣</Button>
          </div>
          <div className="flex w-full justify-between gap-1 mobile:gap-3">
            <Select options={filterDurations} text={"duration"} />
            <Button type="transparent">Date Picker</Button>
          </div>
        </div>

        <Button type="secondary">Search</Button>
      </div>
    </section>
  );
}

export default Filter;
