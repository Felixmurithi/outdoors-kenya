function LinkText({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <a href={link} className="text-lunar-green-500 hover:text-lunar-green-400">
      {children}
    </a>
  );
}

export default LinkText;
