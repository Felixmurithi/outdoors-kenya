function LinkText({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={link}
      className="text-lunar-green-500 hover:text-lunar-green-300 whitespace-nowrap"
    >
      {children}
    </a>
  );
}

export default LinkText;
