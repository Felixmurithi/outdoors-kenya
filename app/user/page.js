import { events } from "@/app/_lib/events";

import Card from "@/app/_components/Card";
import Profile from "@/app/_components/user/Profile";

export default function Page() {
  return (
    <main className="grid grid-cols-[1fr_4fr]  border-t-2">
      <div className=" border-r px-8 py-6 grid gap-6 h-vh">
        <Profile />

        <div className="  flex-col gap-4">
          <p>Events</p>
          <p>Liked Events</p>
          <p>Settings</p>
        </div>
      </div>
      <div className="p-6 grid gap-6 ">
        <div className="h-12 rounded  border border-stone-700 p-2 bg-white">
          filter
        </div>
        <div className="grid grid-cols-2">
          {events.map((event, i) => (
            <Card key={i} event={event} vertical={false} />
          ))}
        </div>
      </div>
    </main>
  );
}
