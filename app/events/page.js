import getData from "@/app/_utils/getData";
import Card from "../_components/Card";
import Filter from "../_components/Filter";

const events = [
  {
    name: "name",
    location: "location",
    images: ["/dev-data/football.jpg"],
    description: "this is the description of the event",
    date: "1st December 2024",
    time: "11am -4pm",
    public: "no",
    slots: 20,
  },
];

export default function Events() {
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

      <Filter />

      <section className="max-w-full grid lg:grid-cols-4 mobile:grid-cols-2 rounded-md">
        {events.map((event, i) => (
          <Card key={i} event={event} />
        ))}
      </section>
    </main>
  );
}

// Array.from({ length: 3 }, (x, i) => {
//   something();
// });
