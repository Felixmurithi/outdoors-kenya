import Link from "next/link";
import Button from "../Button";
import NavBar from "@/app/_components/NavBar";

function Header() {
  return (
    <header className="w-full flex  p-4 justify-between">
      <Link
        href={"/"}
        className="text-deepSeaweed-shades-700 font-extrabold text-base mobile:text-lg"
      >
        Outdoors
        <span className="text-green-700">Kenya</span>
      </Link>
      <div className="hidden mobile:flex gap-4  items-center">
        <NavBar />
        <Button>Sign up</Button>
      </div>
      <Button classes={"mobile:hidden"}>🈶</Button>
    </header>
  );
}

export default Header;
