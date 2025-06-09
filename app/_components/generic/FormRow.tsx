type FormRowProps = {
  children?: React.ReactNode;
  classes?: string;
  label: string;
  id?: string;
  error?: String;
};

function FormRow({ children, classes, label, id, error }: FormRowProps) {
  return (
    <div className={`grid gap-2 w-full ${classes}`}>
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      <div className="flex flex-wrap gap-4">{children}</div>

      {error && <p>{error}</p>}
    </div>
  );
}

export default FormRow;
