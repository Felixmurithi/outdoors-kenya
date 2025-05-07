"use client";

type TagProps = {
  children: React.ReactNode;
  color?: string;
};

type RouteTagProps = TagProps & {
  difficulty: string;
};

export default function Tag({ children, color = "bg-stone-300" }: TagProps) {
  return <span className={`${color}  px-1 rounded-lg w-fit`}>{children}</span>;
}

export function RouteTag({ children, difficulty, color }: RouteTagProps) {
  return (
    <div>
      <Tag>{children}</Tag>
      <span>{difficulty}</span>
    </div>
  );
}
