function Repeats() {
  const days = ["s", "m", "t", "w", "t", "f", "s"];

  return (
    <p className="flex gap-2">
      {days.map((x, i) => (
        <span
          className="rounded-full w-4 bg-deepSeaweed-tints-600 grid place-items-center text-sm opacity-50"
          key={i}
        >
          {x}
        </span>
      ))}
    </p>
  );
}

export default Repeats;
