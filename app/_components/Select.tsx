type SelectProps = {
  text: any;
  options: [""];
  classes?: any;
  onChange?: any;
};

function Select({ text, options, classes, onChange }: SelectProps) {
  return (
    <select
      name=""
      id=""
      className={`${classes} px-2 rounded-md bg-deepSeaweed-tints-700`}
      onChange={onChange}
    >
      <option hidden value="">
        {text}
      </option>
      {options.map((option: string, i: number) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
