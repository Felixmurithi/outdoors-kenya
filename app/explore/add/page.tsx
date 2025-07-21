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
    <main className="grid h-full content-start    gap-8  mx-auto mobile:w-[80%] max-w-[96%] lg:max-w-[60%] ">
      <h3 className="text-3xl font-extrabold text-stone-600">Add Event</h3>
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
