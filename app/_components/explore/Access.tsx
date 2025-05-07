import IconText from "../generic/IconText";
import LinkText from "../generic/LinkText";

export default function Access({
  locations,
}: {
  locations: { label: string; link: string; address: string }[];
}) {
  if (locations.length > 1) {
    return (
      <div className="text-sm">
        <div className="py-2">
          <IconText iconLink="/social-icons/location.svg">Access</IconText>
        </div>
        <ul>
          {locations.map((entrance, index) => (
            <li key={index}>
              <h4>{entrance.label}</h4>
              <LinkText link={entrance.link}>{entrance.address}</LinkText>
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
