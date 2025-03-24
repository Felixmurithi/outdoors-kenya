import AddEventForm from "@/app/_components/add/AddEventForm";

function AddEvent() {
  return (
    <main className="grid h-full content-start p-4">
      <h2>Add Event</h2>
      <AddEventForm />{" "}
    </main>
  );
}

export default AddEvent;

// Check Typescript errors
// npx tsc --watch
