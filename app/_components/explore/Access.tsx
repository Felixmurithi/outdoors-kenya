import IconText from "../generic/IconText";
import LinkText from "../generic/LinkText";

export default function Access({
  locations,
}: {
  locations: { label: string; link: string; address: string }[];
}) {
  // add the different enetrances if available and how to get those entranances
  // the placed and adress of the entrances, the neareat bust stop and how to get there, either boda, bus or walk, the istance btween each stop

  // sample - ngongp hills gate b, kesrian town bus stop
  // sample- karura gate A, khoja bus stop or Ngara bus stop
  //sample- oldonyo sabuk from Thika Makongeni bust stop through makutano twon

  if (locations.length > 1) {
    return (
      <div className="">
        <div className="py-2 text-stone-800 font-semibold ">
          <IconText iconLink="/social-icons/location.svg">Access</IconText>
        </div>
        <ul className="flex  gap-2 flex-wrap">
          {locations.map((entrance, index) => (
            <li key={index} className="p-2 grid gap-2">
              <LinkText link={entrance.link}>{entrance.address}</LinkText>
              <div>
                <p className="text-xs font-semibold text-stone-400">
                  5 km from{" "}
                  <span className="text-lunar-green-400 hover:underline hover:text-lunar-green-200">
                    Thika Makongeni
                  </span>
                </p>
                <p className="text-xs  text-stone-500">
                  3km from makutano town
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="text-sm">
        <h4>Location</h4>
        <p>{locations[0].label}</p>
        <a
          href={locations[0].link}
          className="hover:text-deepSeaweed-tints-200 text-deepSeaweed-tints-200"
        >
          {locations[0].address}
        </a>
      </div>
    );
  }
}

// finnnaly figured out how to show differenet acesss
// problems- hoow to show the acess of the place when it includes more than I gate, differnet map locations while adding links of the locations, how to show directions between the acess and the neareat town or bus stop. how to make a presentable component that shows tyhe hierachy of the acess adress and the neareast town or bus stop while accomodating for cases where there are ttwo towns or bust stop that are important waypoints to the acces point.
//solution- show the distance beween

//12/5/2025
//READ-https://medium.com/design-bridges/designing-better-links-for-websites-and-emails-a-guideline-5b8638ce675a, highlights wghat to consider when deisgning for links.
