type SelectProps = {
  text?: string;
  options?: string[];
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
  value?: string;
  register?: any;
};

function Select({
  text,
  options,
  classes,
  onChange,
  children,
  value,
  register,
}: SelectProps) {
  return (
    <select
      value={value}
      className={`${classes || ""}  rounded-md bg-deepSeaweed-tints-700`}
      onChange={onChange}
      {...register}
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
