"use client";

import Button from "@/app/_components/generic/Button";
import { signup } from "@/app/_lib/action";

function Profile() {
  signup();
  return (
    <div className="div flex-col items-center gap-6">
      <img
        src="/imgs/profile.jpg"
        alt="profile"
        className="object-fit w-12 rounded-full object-left"
      />
      <p className="text-sm">Big Man</p>
      {/* <Button type="secondary">Follow</Button> */}
    </div>
  );
}

export default Profile;

// server actyions are used to learn
