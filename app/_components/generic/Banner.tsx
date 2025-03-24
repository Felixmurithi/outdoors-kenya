type Props = {
  image: string;
  children: React.ReactNode;
};

function Banner({ image, children }: Props) {
  return (
    <div
      className="w-full px-4  h-20 grid items-center text-deepSeaweed-tints-700"
      style={{
        backgroundImage: `linear-gradient(
        var(--bg-dark-50),
        var(--bg-dark-50)
      ),url(/${image})`,
        backgroundSize: "cover",
        backgroundPosition: `center right`,
      }}
    >
      <h2>{children}</h2>
    </div>
  );
}

export default Banner;
