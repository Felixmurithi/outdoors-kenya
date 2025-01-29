type FormRowProps= {
  children?: React.ReactNode
  classes?: string
  label: string
  id?: string
  error?:String
}

function FormRow({ children, classes, label, id, error }: FormRowProps) {
  return (
    <div className={`grid gap-2 w-full ${classes}`}>
      <label className="capitalize" htmlFor={id}>
        {label}
      </label>
      <div className="flex flex-wrap gap-4 mobile:flex-nowrap">{children}</div>

      {error && <p>{error}</p>}
    </div>
  );
}

export default FormRow;
