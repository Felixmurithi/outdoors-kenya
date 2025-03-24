import ActivityHighlight from "@/app/_components/home/ActivityHighlight";

import Signup from "@/app/_components/generic/Signup";
import hike from "@/public/home/hike.jpg";

export default function Home() {
  function handleSubmit() {}

  return (
    <main className="grid grid-rows-[1fr_2fr]">
      <div
        className="cover grid place-items-center w-full"
        style={{
          backgroundImage: `linear-gradient(var(--bg-dark-20) 90%,var(--bg-dark)),url(/home/hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: `top center`,
        }}
      >
        <div className="text-center grid gap-4">
          <h1 className="text-green-600  text-3xl mobile:text-5xl tracking-tight grid">
            <span className="font-bold tracking-normal">Powering Outdoor</span>
            <span className="text-accent-color-100">Experiences</span>
          </h1>
          <p className="text-white tracking-normal text-lg font-semibold">
            Find events, explore and connect.
          </p>
          {/* <Button type="secondary">Explore</Button> */}
        </div>
      </div>

      <div className="bg-deepSeaweed-shades-600">
        <div className="grid mobile:grid-cols-2 w-[80%] py-6 m-auto gap-6">
          <ActivityHighlight image={"home/football.jpg"} bgTop="top">
            Compete
          </ActivityHighlight>
          <ActivityHighlight image={"home/canoing.jpg"}>
            Adventure
          </ActivityHighlight>
          <ActivityHighlight image={"home/train.jpg"}>Train</ActivityHighlight>
          <ActivityHighlight image={hike}>Shop</ActivityHighlight>
        </div>
      </div>

      {/* <Signup /> */}
    </main>
  );
}

// Image from next needs thhe widtha and height or the image so that it can use it can dimeniosn sto teh iamge on its own and render different versiosn of the images. img cannot use imported images

//tailwind gradient
// bg-gradient-to-b from-white to-black
