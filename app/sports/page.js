import getData from "@/app/_utils/getData";
import Card from "../_components/Card";
import Button from "../_components/Button";

export default function Sites() {
  // const sites = await getData(`http://localhost:8000/sites`);
  // const [locations, error] = useGetLocations();

  // if (error || !locations) return <p>error</p>;
  return (
    <main className="grid gap-8">
      <section className=" after:Explore Locations">
        <h2>All leagues & tournaments </h2>
        <img
          src="/explore-banner.jpg"
          width={"100%"}
          height={"100px"}
          alt="explore page banner"
        />
      </section>
      <section className="flex w-full ">
        <div className="flex w-full justify-between gap-4">
          <div className="flex items-center">
            <Button type="icon">🔢</Button>
            <Button type="icon">1️⃣</Button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-1">
              <select name="Location" id="">
                <option value="">Location</option>
                <option value="">CountryWide</option>
                <option value="">Nairobi</option>
                <option value="">Mombasa</option>
              </select>

              <select className="w-14" name="activity" id="">
                <option value="">football</option>
                <option value="">rugby</option>
                <option value="">hockey</option>
                <option value="">tennis</option>
                <option value="">cricket</option>
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
