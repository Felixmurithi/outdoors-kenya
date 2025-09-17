import { events } from "@/app/_lib/events";
import Events from "@/app/_components/generic/Events";
import PageLayout from "@/app/_components/generic/Page";

export default function EventsPage() {
  return (
    <PageLayout
      banner="events-banner.jpg"
      headline="Events"
      params={{ slug: "events" }}
    >
      hi
      {/* <Events events={events} /> */}
    </PageLayout>
  );
}
