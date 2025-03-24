type Props = {
  link: string;
  icons: string[];
};

// icon for social media links
//Props- link, children as svg, alt
// children- svg path
export default function SocialIcons({ link, icons }: Props) {
  return (
    <div>
      {icons.map((type, i) => (
        <div className="rounded-full bg-red-500">
          <a href={link}>
            <img
              src={`/social-icons/${type}`}
              className="w-[20px] bg-white "
              alt={type}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
