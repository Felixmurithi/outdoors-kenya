function ActivityHighlight({ children, image, bgTop = "center" }) {
  return (
    <div
      className="grid h-32 mobile:h-56  rounded-sm place-items-center text-white tall:h-72 border border-deepSeaweed-tints-200 hover:border-deepSeaweed-tints-600 focus:w-[90%]"
      style={{
        backgroundImage: `linear-gradient(
      var(--bg-dark-20),
      var(--bg-dark-20)
    ),url(/${image})`,
        backgroundSize: "cover",
        backgroundPosition: `${bgTop} center`,
      }}
    >
      <h3 className="">{children}</h3>
    </div>
  );
}

export default ActivityHighlight;
