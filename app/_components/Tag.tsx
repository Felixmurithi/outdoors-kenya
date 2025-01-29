function Tag({ children, color = "bg-stone-300" }) {
  return <span className={`${color}  px-1 rounded-lg`}>{children}</span>;
}

export default Tag;
