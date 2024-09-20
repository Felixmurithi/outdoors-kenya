import getData from "@/app/_utils/getData";
import Card from "../_components/Card";
import Button from "../_components/Button";

export default function Sites() {
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
    ),url(/explore-banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: `top right`,
        }}
      >
        {" "}
        <h2>Find New Experiences</h2>
      </section>
      <section className="flex w-full ">
        <div className="flex w-full justify-between gap-8">
          <div className="flex items-center">
            <Button type="icon">🔢</Button>
            <Button type="icon">1️⃣</Button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-1">
              <select name="Location" id="">
                <option value="">Location</option>
                <option value="">Nairobi</option>
                <option value="">Mombasa</option>
              </select>

              <select className="w-14" name="activity" id="">
                <option value="">type</option>
                <option value="">trails</option>
                <option value="">parks</option>
                <option value="">training</option>
                <option value="">training facilities</option>
                <option value="">play fields</option>
                <option value="">mad courses</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button type="secondary" classes={"py-1"}>
                Free
              </Button>
              <Button type="transparent" classes={"w-6"}>
                $
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 rounded-md">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}

// Array.from({ length: 3 }, (x, i) => {
//   something();
// });
