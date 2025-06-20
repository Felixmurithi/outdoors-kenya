function IconText({
  iconLink,
  children,

  className,
}: {
  iconLink: string;
  children: React.ReactNode;

  className?: string;
}) {
  return (
    <div className={`flex gap-2 ${className} p-1`}>
      <img src={iconLink}></img>
      <div>{children}</div>
    </div>
  );
}

export default IconText;
