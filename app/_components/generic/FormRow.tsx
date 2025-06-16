type FormRowProps = {
  children?: React.ReactNode;
  label: string;
  id?: string;
  error?: String;
  nested?: boolean;
};

function FormRow({
  children,

  label,
  id,
  error,
  nested = false,
}: FormRowProps) {
  return (
    <div className={`grid gap-2 w-full `}>
      <h4
        className={`${nested ? "text-stone-600" : ""} font-semibold capitalize`}
      >
        {label}
      </h4>
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormRow;
