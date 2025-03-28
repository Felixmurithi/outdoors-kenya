import Link from "next/link";
import Button from "./Button";

type Props = {
  options: string[];
  setOpenMenu: React.Dispatch<React.SetStateAction<number | null>>;
  id: number;
  openMenu: number | null;
};

function DropdownMenu({ options, openMenu, setOpenMenu, id }: Props) {
  function toggleMenu() {
    if (openMenu == id) setOpenMenu(null);
    else setOpenMenu(id);
  }

  console.log(openMenu == id);
  //TO-NOTE- React does not update state when passed in the same value which ensures that there no unnecessary renders.

  return (
    <div className="relative group">
      <Link
        href={"/explore"}
        onMouseEnter={() => setOpenMenu(id)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        explore
      </Link>

      <div className="absolute    -right-2 group-focus-within:block group-hover:block hidden   top-full ">
        <span className="tranparent h-4 block"></span>
        <ul className="grid gap-2 py-4 bg-stone-100">
          {options.map((option, i) => (
            <li key={i} className="hover:bg-stone-200 py-2 px-6">
              <Link href={`/${option}`} className=" p-1">
                {option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
