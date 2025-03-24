import EntranceFees from "@/app/_components/locations/EntranceFees";
export default async function Site({ params }) {
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

      <EntranceFees tableData={tableData} />

      <div>
        <p>official website </p>
        <div>
          <span>x</span>
        </div>
        social media
      </div>
    </main>
  );
}
