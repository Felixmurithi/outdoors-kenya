type SelectProps = {
  label?: string;
  options?: string[];
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children?: React.ReactNode;
  value?: string;
  register?: any;
  disabled?: boolean;
  error?: boolean;
};

function Select({
  label,
  options,
  className,
  onChange,
  children,
  register,
  disabled = false,
  error = false,
}: SelectProps) {
  return (
    <select
      className={`${className} rounded-md bg-deepSeaweed-tints-700 ${
        error ? "border-orange-500 border" : ""
      }`}
      onChange={onChange}
      {...register}
    >
      {label && (
        <option value="" hidden>
          {label}
        </option>
      )}

      {options?.map((option: string, i: number) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
