type FormRowProps = {
  children?: React.ReactNode;
  classes?: string;
  label: string;
  id?: string;
  error?: String;
  nested?: boolean;
};

function FormRow({
  children,
  classes,
  label,
  id,
  error,
  nested = false,
}: FormRowProps) {
  return (
    <div className={`grid gap-2 w-full ${classes} ${nested ? "text-sm" : ""}`}>
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      <div className="">{children}</div>

      {error && <p>{error}</p>}
    </div>
  );
}

export default FormRow;
