import Locations from "@/app/_components/explore/Locations";
import Page from "@/app/_components/generic/Page";

/// ALL OUTDOOR DESIGNATED  LOCATIONS- national parks, forests, privates parks forest

// on click explore seqquery = all
// search drop down  to include tags
export default function ExploreAllPage() {
  return (
    <Page
      banner="imgs/bike_riding-event.jpg"
      headline="Hiking Trails"
      params={{ slug: "hiking-trails" }}
    >
      hi
      {/* <Locations locations={locations} /> */}
    </Page>
  );
}

// Array.from({ length: 3 }, (x, i) => {
//   something();
// });

// how do u get the cards to show the searched activity as the first tag.
