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
    <div className="relative">
      <Link
        href={"/explore"}
        onMouseEnter={() => setOpenMenu(id)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        explore
      </Link>

      <div className="absolute bg-stone-100 hidden  group-hover:block  ">
        {options.map((option, i) => (
          <div key={i}>
            <Link href={`/${option}`} className="hover:bg-stone-200 p-1">
              {option}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
