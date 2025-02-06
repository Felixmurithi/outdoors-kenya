type Props = {
  icon?: React.ReactNode;
  iconColor?: string;
  opaque?: boolean;
  children?: React.ReactNode;
};

function ListItem({
  icon,
  iconColor = "text-green-900",
  opaque = true,
  children,
}: Props) {
  return (
    <li>
      <span className={`${iconColor} ${opaque ? "text-opacity-50" : ""}`}>
        {icon}
      </span>{" "}
      <span className={` ${opaque ? "opacity-50" : ""}`}>{children}</span>
    </li>
  );
}

export default ListItem;
