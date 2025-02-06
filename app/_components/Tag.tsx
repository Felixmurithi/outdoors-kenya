type Props = {
  children: React.ReactNode;
  color: string;
};

function Tag({ children, color = "bg-stone-300" }: Props) {
  return <span className={`${color}  px-1 rounded-lg`}>{children}</span>;
}

export default Tag;
