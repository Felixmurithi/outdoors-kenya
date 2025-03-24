"use client";

type Props = {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
};

function Tag({ children, color = "bg-stone-300", onClick }: Props) {
  return (
    <span className={`${color}  px-1 rounded-lg w-fit`} onClick={() => onClick?.()}>
      {children}
    </span>
  );
}

export default Tag;
