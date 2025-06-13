import AddEventForm from "@/app/_components/add/AddEventForm";
import AddLocationForm from "@/app/_components/add/AddLocationForm";
function AddEvent({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);

  return (
    <main className="grid h-full content-start w-fit mx-auto gap-8">
      <h2>Add Event</h2>
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
