function ListItem({
  icon,
  iconColor = "text-green-900",
  opaque = true,
  children,
}) {
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
