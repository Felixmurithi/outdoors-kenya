import SocialIcon from "@/app/_components/SocialIcon";

function Footer() {
  return (
    <footer className="bg-deepSeaweed-shades-500 text-luna-green-100 py-2">
      <ul className="flex w-full justify-between px-3 rounded-md mx-auto">
        <SocialIcon
          link={"mailto:felixmurithi.dev@gmail.com"}
          svg={"/socials/email.svg"}
          alt={"email icon"}
        />
        <SocialIcon
          link={"https://github.com/felixmurithi"}
          svg={"/socials/github.svg"}
          alt={"github icon"}
        />
        <SocialIcon
          link={"https://www.linkedin.com/in/felix-murithi/"}
          svg={"/socials/linkedin.png"}
          alt={"linkedin icon"}
        />
      </ul>
    </footer>
  );
}

export default Footer;
