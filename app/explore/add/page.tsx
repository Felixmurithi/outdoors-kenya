import AddEventForm from "@/app/_components/add/AddEventForm";
import AddLocationForm from "@/app/_components/add/AddLocationForm";
function AddEvent({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="grid h-full content-start mx-4 w-fit mobile:mx-6 sm:mx-auto gap-8 ">
      <h3>Add Event</h3>
      <AddLocationForm />
    </main>
  );
}

export default AddEvent;

// {
//   Array.from(Array(i)).map(() => <ObjectRow />)
// }

// Check Typescript errors
// npx tsc --watch
