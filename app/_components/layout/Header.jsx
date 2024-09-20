import Link from "next/link";
import Button from "../Button";

function Header() {
  return (
    <header className="w-full flex py-2 justify-between">
      <Link
        href={"/"}
        className="text-deepSeaweed-shades-700 font-extrabold text-base mobile:text-lg"
      >
        Outdoors
        <span className="text-green-700">Kenya</span>
      </Link>
      <div className="hidden mobile:flex gap-4  items-center">
        <Link href={"/events"}>Events</Link>
        <Link href={"/sports"}>Sports</Link>
        <Link href={"/explore"}>Explore</Link>
        <Button>Sign up</Button>
      </div>
      <Button classes={"mobile:hidden"}>🈶</Button>
    </header>
  );
}

export default Header;
