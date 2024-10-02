"use client";

import Link from "next/link";

export default function Button({
  children,
  onClick,
  link = "",
  type = "primary",
  classes,
}) {
  const buttonStyles = {
    primary: "bg-accent-color-100  text-stone-900 px-2 py-1 ",
    secondary: " px-2 bg-main-color text-white border py-1 ",
    transparent: "px-2 bg-transparent text-stone-700 border py-1 ",
    icon: "px-0 py-0",
  };

  return (
    <button
      type={`${link || onClick ? "button" : "submit"}`}
      className={` ${buttonStyles[type]}  rounded-md ${classes} w-max self-center h-8`}
      onClick={onClick}
    >
      {/* <button type="submit"> */}
      {link ? <Link href={link}>{children}</Link> : children}
    </button>
  );
}
