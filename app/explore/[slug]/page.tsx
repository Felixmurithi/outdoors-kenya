import EntranceFees from "@/app/_components/explore/EntranceFees";
import SocialIcons from "@/app/_components/generic/SocialIcons";
import Access from "@/app/_components/explore/Access";
import Route from "@/app/_components/explore/PopularRoute";

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
    <main className="px-24">
      <div className="py-4">
        <p className="uppercase text-[12px] tracking-widest opacity-75">
          nairobi, kimende
        </p>
        <h2>Karura Forest</h2>
      </div>

      <div className="flex justify-between bg-slate-500">
        <Access locations={sampleLocations} />

        <EntranceFees tableData={tableData} />
      </div>

      <Route />

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
