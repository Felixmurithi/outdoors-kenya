import { locations } from "@/app/_lib/locations";
import Locations from "@/app/_components/explore/Locations";
import Page from "@/app/_components/generic/Page";

export default function PlaygroundsPage() {
  return (
    <Page
      banner="imgs/bike_riding-event.jpg"
      headline="Playgrounds"
      params={{ slug: "playgrounds" }}
    >
      <Locations locations={locations} />
    </Page>
  );
}
