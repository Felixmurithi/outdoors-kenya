import EntranceFees from "@/app/_components/locations/EntranceFees";
import SocialIcons from "@/app/_components/generic/SocialIcons";
import Access from "@/app/_components/locations/Access";

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

export default async function HikingTrails({}) {
  ////HTML
  //image

  //BASIC
  // basic details- name-description,  count &adress,
  // longets trail
  // managed by- contacts, links,

  //DETAILS
  // entrance cost
  //entrance place id map icon- if its 1 its a location 2 or more entrances

  // oher activties- tags

  //

  const tableData = [
    [100, 100, 400],
    [50, 50, 300],
  ];

  return (
    <main className="px-4">
      <img
        src="/imgs/bike_riding-event.jpg"
        alt=""
        className="mobile:w-[50%] h-72 object-cover"
      />

      <div className="py-4">
        <p className="uppercase text-[12px] tracking-widest opacity-75">
          nairobi, kimende
        </p>
        <h2>Karura Forest</h2>

        <p>longest trail : 15km</p>
      </div>

      <Access locations={sampleLocations} />

      <EntranceFees tableData={tableData} />

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
