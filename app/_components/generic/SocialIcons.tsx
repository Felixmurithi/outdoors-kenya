import SocialIcon from "@/app/_components/generic/SocialIcon";

type Props = {
  icons: { name: string; link: string }[];
};

// icon for social media links
//Props- link, children as svg, alt
// children- svg path
export default function SocialIcons({ icons }: Props) {
  return (
    <div className="flex">
      {icons?.map((icon, i) => (
        <SocialIcon
          key={i}
          link={icon.link}
          svg={`/social-icons/${icon.name}.svg`}
          alt={`${icon.name} icon`}
        />
      ))}
    </div>
  );
}

//TO DO
//icons is initailly undefined- that is why I check for undefined
