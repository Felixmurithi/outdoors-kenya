"use client";

import Link from "next/link";
// types
//some optionl
type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  link?: string;
  type?: "button" | "submit";
  style?: "primary" | "secondary" | "transparent" | "icon" | "text";
  classes?: string;
  className?: string;
  disabled?: boolean;
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
  disabled,
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
    secondary:
      " px-2 bg-lunar-green-700 text-white border py-1 hover:bg-lunar-green-600 focus:bg-lunar-green-600",
    transparent: "px-2 bg-transparent text-stone-700 border py-1 ",
    icon: "px-0 py-0",
    text: "",
  };

  return (
    <button
      disabled={disabled}
      type={`${link || onClick ? "button" : "submit"}`}
      className={` ${
        buttonStyles[style]
      }  rounded-md ${classes} ${className} w-max h-8 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
    >
      {/* <button type="submit"> */}
      {link ? <Link href={link}>{children}</Link> : children}
    </button>
  );
}

//typescript noty smart enough now when u pas in teh wrong values
