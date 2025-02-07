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
    <div>
      <button onMouseEnter={() => setOpenMenu(id)} onClick={toggleMenu}>
        explore
      </button>

      {openMenu == id ? (
        <div className="absolute grid bg-white rounded border gap-2 py-2">
          {options.map((option, i) => (
            <Link
              href={`/${option}`}
              key={i}
              className="hover:bg-stone-200 p-1"
            >
              {option}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropdownMenu;
