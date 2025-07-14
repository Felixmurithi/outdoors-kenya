"use client";

import Link from "next/link";
// types
//some optionl
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
  type?: "button" | "submit";
  style?: "primary" | "secondary" | "transparent" | "icon" | "text";
  classes?: string;
  className?: string;
};

// type ButtonStylesProps = {
//   primary: string;
//   secondary: string;
//   transparent: string;
//   icon: string;
//   text: string;
// };
// u dont have to define the type object but can be done direct on params. this makes code clean

//button props types to avoid the "missing peropertis" error
export default function Button({
  children,
  onClick,
  link = "",
  type = "button",
  classes,
  className,
  style = "primary",
}: ButtonProps) {
  const buttonStyles = {
    primary: "bg-accent-color-100  text-stone-900 px-2 py-1 ",
    secondary: " px-2 bg-main-color text-white border py-1 ",
    transparent: "px-2 bg-transparent text-stone-700 border py-1 ",
    icon: "px-0 py-0",
    text: "",
  };

  return (
    <button
      type={`${link || onClick ? "button" : "submit"}`}
      className={` ${buttonStyles[style]}  rounded-md ${classes} ${className} w-max h-8 `}
      onClick={onClick}
    >
      {/* <button type="submit"> */}
      {link ? <Link href={link}>{children}</Link> : children}
    </button>
  );
}

//typescript noty smart enough to know when u pas in teh wrong values
