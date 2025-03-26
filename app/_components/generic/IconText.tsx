function IconText({
  iconLink,
  children,
  classes,
}: {
  iconLink: string;
  children: React.ReactNode;
  classes?: string;
}) {
  return (
    <div className={`flex gap-4 ${classes}`}>
      <img src={iconLink}></img>
      <div>{children}</div>
    </div>
  );
}

export default IconText;
