import Error from "@/app/_components/generic/Error";

type FormRowProps = {
  children?: React.ReactNode;
  label: string;
  id?: string;
  error?: string;
  nested?: boolean;
};

function FormRow({ children, label, id, error, nested = false }: FormRowProps) {
  return (
    <div className={`grid gap-4 w-full `}>
      <h4
        className={`${nested ? "text-stone-600" : ""} font-semibold capitalize`}
      >
        {label}
      </h4>
      {children}
      {error ? <Error error={error} /> : ""}
    </div>
  );
}

export default FormRow;
