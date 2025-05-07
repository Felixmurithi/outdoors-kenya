"use client";

import Link from "next/link";
// types
//some optionl
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
  type?: string;
  classes?: string;
};

type ButtonStylesProps = {
  primary: string;
  secondary: string;
  transparent: string;
  icon: string;
  text: string;
};
// u dont have to define the type object but can be done direct on params. this makes code clean

//button props types to avoid the "missing peropertis" error
export default function Button({
  children,
  onClick,
  link = "",
  type = "primary",
  classes,
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
      className={` ${
        buttonStyles[type as keyof ButtonStylesProps]
      }  rounded-md ${classes} w-max h-8`}
      onClick={onClick}
    >
      {/* <button type="submit"> */}
      {link ? <Link href={link}>{children}</Link> : children}
    </button>
  );
}

export function SliderButton({
  onClick,
  icon,
  direction = "left-0",
}: {
  onClick: () => void;
  icon: string;
  direction?: string;
}) {
  return (
    <button
      className={`absolute top-1/2 ${direction} transform -translate-y-1/2 bg-white border-none p-4 text-lg cursor-pointer opacity-25 hover:opacity-70`}
      onClick={onClick}
    >
      <img src={icon} alt="arrow right button" />
    </button>
  );
}

//typescript noty smart enough to know when u pas in teh wrong values
