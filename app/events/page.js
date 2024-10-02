import getData from "@/app/_utils/getData";
import Events from "@/app/_components/Events/Events";
import { events } from "@/app/_lib/events";

export default function Page() {
  // const sites = await getData(`http://localhost:8000/sites`);
  // const [locations, error] = useGetLocations();

  // if (error || !locations) return <p>error</p>;

  return (
    <main className="grid gap-8">
      <section
        className="w-full px-4 h-32 grid items-center text-deepSeaweed-tints-700"
        style={{
          backgroundImage: `linear-gradient(
      var(--bg-dark-50),
      var(--bg-dark-50)
    ),url(/events-banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: `top right`,
        }}
      >
        <h2>All Outdoor Events</h2>
      </section>

      <Events events={events} />
    </main>
  );
}

// Array.from({ length: 3 }, (x, i) => {
//   something();
// });
