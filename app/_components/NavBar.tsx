"use client";
import DropdownMenu from "@/app/_components/DropdownMenu";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [opeMenu, setOpenMenu] = useState<null | number>(null);

  //null to initially set all drop downs to close

  // set drop down to its key and open it- onClick and on mouse enter and close the other one

  return (
    <div className="flex gap-4">
      {/* <Link href={"/events"}>Events</Link> */}
      {/* <Link href={"/sports"}>Sports</Link> */}
      <DropdownMenu
        openMenu={opeMenu}
        id={0}
        options={["hiking-trails", "playgrounds"]}
        setOpenMenu={setOpenMenu}
      />
    </div>
  );
}

export default NavBar;
