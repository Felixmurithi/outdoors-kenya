import Button from "@/app/_components/generic/Button";

import Repeats from "@/app/_components/generic/Repeats";
import ListItem from "@/app/_components/generic/ListItem";

// PAGE MAP
//image, name, location(county )
//type
//activities and entrances for each acitivity and cost
//

export default async function LocationPage({}) {
  return (
    <main className="grid gap-8">
      <img
        src="/imgs/bike_riding-event.jpg"
        alt=""
        className="mobile:w-[50%] h-72 object-cover"
      />
      <article className="grid gap-16">
        <div className="grid mobile:grid-cols-[1fr_auto] w-full justify-between gap-8">
          <div className="grid gap-10">
            <div>
              <p className="uppercase text-[12px] tracking-widest opacity-75">
                museum hill
              </p>
              <h2>east Africa&apos;s bigest body building event</h2>
            </div>
            <div className="div flex items-center gap-3">
              <img
                src="/imgs/profile.jpg"
                alt="profile"
                className="object-fit w-12 rounded-full object-left"
              />
              <p className="text-sm">Big Man</p>
              <Button style="secondary">Follow</Button>
            </div>
            <div className="grid gap-2">
              <li className="font-bold text-sm">1st December 2024</li>
              <li className="text-sm opacity-50 t">11am : 6pm</li>
              <Repeats />
            </div>
          </div>
          <div className="border p-2 self-end w-min">
            <div className="flex gap-3">
              <span className="text-green-800">Free</span>
              <Button classes={"w-full rounded-lg"}>Reserve Event</Button>
            </div>
            <p className="text-sm opacity-50">Reserve Now and pay Later</p>
          </div>
        </div>
        <div className="grid grid-cols-[3fr_1fr]">
          <div className="grid gap-6">
            <p className=" w-[70%] text-justify opacity-65">
              This is a body building event that is organized by Big Man who has
              over 20 yrs in the body builidng arena. This evenmts brings
              together Kenya&apos;s and East Africas best Athletes dueling for
              the Ultimate Body Builder Title in the men&apos;s and women&apos;s
              category. See u there!
            </p>
            <ul className="grid gap-2">
              <p className="font-bold text-lg">Event guidelines</p>
              <ul></ul>
              <ListItem>
                This is a intermediate level event (heartrate: 160+)
              </ListItem>
              <ListItem>Wear Athleisure</ListItem>
              <ListItem>Carry a sun cap</ListItem>
            </ul>
            <img src="/imgs/social-media/googlemaps.svg" alt="" />
          </div>
          <div className="grid gap-4">
            <h3>Socials</h3>
          </div>
        </div>
        <div className="grid gap-4">
          <h3>Next Event</h3>
          <div className="border w-max p-4">
            <p>1st January 2025</p>
          </div>
        </div>
      </article>
    </main>
  );
}
