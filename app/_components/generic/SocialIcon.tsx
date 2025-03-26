type Props = {
  link: string;
  svg: string;
  alt: string;
};

// icon for social media links
//Props- link, children as svg, alt
// children- svg path
export default function SocialIcon({ link, svg, alt }: Props) {
  return (
    <a href={link} className="hover:scale-110">
      <img src={`${svg}`} className="w-[20px " alt={alt} />
    </a>
  );
}
