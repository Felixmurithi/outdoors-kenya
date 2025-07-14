type SelectProps = {
  label?: string;
  options?: string[];
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
  value?: string;
  register?: any;
  disabled?: boolean;
};

function Select({
  label,
  options,
  classes,
  onChange,
  children,
  value,
  register,
  disabled = false,
}: SelectProps) {
  return (
    <select
      disabled={disabled}
      value={value}
      className={`${classes || ""}  rounded-md bg-deepSeaweed-tints-700`}
      onChange={onChange}
      {...register}
    >
      {label && (
        <option hidden value="">
          {label}
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
