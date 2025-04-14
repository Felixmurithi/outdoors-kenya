type InputProps = {
  classes?: string;
  id?: string;
  type?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: { target: HTMLInputElement }) => void;
  placeholder?: string;
  reactHooKFormValidate?: {};
  value?: string;
  label?: string;
};

function Input({
  classes,
  id,
  type = "text",
  name,
  checked,
  onChange,
  placeholder,
  reactHooKFormValidate,
  value,
  label,
}: InputProps) {
  return (
    <div className="grid">
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        defaultChecked={checked}
        name={name}
        id={id}
        type={`${type}`}
        placeholder={placeholder}
        className={`${classes} rounded-sm h-8  border border-deepSeaweed-tints-300 text-deepSeaweed-tints-300 w-full px-2 bg-deepSeaweed-tints-700`}
        {...reactHooKFormValidate}
      />
    </div>
  );
}

export default Input;

{
  /* <input
            className="absolute z-50 top-0 bottom-0 left-0 right-0"
            id="coverImage"
            onChange={(e) => handleImageChange(e, 0)}
            type="file"
            classes={"h-36 bg-stone-200"}
            // name="cover-image"
            // onChange={(e) => handleChange(e, "img1")}
            {...register("coverImage", { required: "This field is required" })}
          />
          <p>drop files or click to upload</p> */
}
