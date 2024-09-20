function Select({ text, options, classes }) {
  return (
    <select
      name=""
      id=""
      className={`${classes} px-2 rounded-md bg-deepSeaweed-tints-700`}
    >
      <option hidden value="">
        {text}
      </option>
      {options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
