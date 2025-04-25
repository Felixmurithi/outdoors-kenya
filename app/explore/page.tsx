import { locations } from "@/app/_lib/locations";
import Locations from "@/app/_components/explore/Locations";
import Page from "@/app/_components/generic/Page";

export default function ExploreAllPage() {
  return (
    <Page
      banner="imgs/bike_riding-event.jpg"
      headline="Hiking Trails"
      params={{ slug: "hiking-trails" }}
    >
      <Locations locations={locations} />
    </Page>
  );
}

// Array.from({ length: 3 }, (x, i) => {
//   something();
// });
