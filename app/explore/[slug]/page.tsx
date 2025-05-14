import EntranceFees from "@/app/_components/explore/EntranceFees";
import SocialIcons from "@/app/_components/generic/SocialIcons";
import Access from "@/app/_components/explore/Access";
import PopularRoutes from "@/app/_components/explore/PopularRoutes";

type EntranceFeesTable = [string[], number[], number[]];
const tableData: EntranceFeesTable = [
  ["kshs", "kshs", "USD"],
  [100, 100, 400],
  [50, 50, 300],
];

const icons = [
  { name: "facebook", link: "https://www.facebook.com" },
  { name: "twitter", link: "https://www.twitter.com" },
  { name: "instagram", link: "https://www.instagram.com" },
];

const sampleLocations = [
  {
    label: "Main Entrance",
    link: "https://example.com/main-entrance",
    address: "123 Main St, Anytown, USA",
  },
  {
    label: "North Gate",
    link: "https://example.com/north-gate",
    address: "456 North Rd, Anytown, USA",
  },
  {
    label: "South Entry",
    link: "https://example.com/south-entry",
    address: "789 South Ave, Anytown, USA",
  },
];

export default async function Location({}) {
  return (
    <main className="px-2 mobile:px-8 sm:px-16 lg:px-32 border-t  grid gap-16 ">
      <div className="grid gap-6">
        <div className="">
          <h2>Karura Forest</h2>
          <h4 className="uppercase text-xs tracking-widest opacity-75">
            nairobi (Muthaiga),{" "}
            <span className="bg-stone-400 px-1  text-yellow-300">
              Kenya Forest Reserve
            </span>
          </h4>
        </div>

        <div className="flex justify-between flex-wrap gap-8">
          <Access locations={sampleLocations} />

          <EntranceFees tableData={tableData} />
        </div>
      </div>

      <PopularRoutes />

      <div>
        <p>official website </p>
        <div>
          <SocialIcons icons={icons} />
        </div>
        social media
      </div>
    </main>
  );
}

//TODO - figure out why media queries are not working for lg device size pd
