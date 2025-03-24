type SelectProps = {
  text?: string;
  options?: string[];
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
  value?: string;
};

function Select({ text, options, classes, onChange, children, value }: SelectProps) {
  return (
    <select
      value={value}
      className={`${classes || ''} px-2 rounded-md bg-deepSeaweed-tints-700`}
      onChange={onChange}
    >
      {text && (
        <option hidden value="">
          {text}
        </option>
      )}
      {options?.map((option: string, i: number) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
      {children}
    </select>
  );
}

export default Select;
