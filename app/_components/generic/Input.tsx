type InputProps = {
  classes?: string;
  type?: string;
  name?: string;
  checked?: boolean;
  // onChange?: (e: { target: HTMLInputElement }) => void;
  placeholder?: string;

  value?: string;
  label?: string;
  size?: "normal" | "small";
  register?: any;
  setValue?: any;
};

//
function Input({
  classes,
  label,
  type = "text", //to specify input type text or number
  name,
  checked, // for checkbox to create checkbox input
  placeholder,
  value,
  size = "normal",
  register,
}: // setValue,
// input,
InputProps) {
  //set the htmlfor id at lobel wuisng teh label of that input
  const id = `${label?.toLowerCase().replace(" ", "-")}-input`;

  return (
    <div className="flex flex-col justify-between gap-1">
      {label ? <label htmlFor={id}>{label}</label> : ""}
      <input
        value={value}
        defaultChecked={checked}
        name={name}
        id={id}
        type={`${type}`}
        placeholder={placeholder}
        className={`${classes} rounded-lg  border border-deepSeaweed-tints-500 placeholder:text-deepSeaweed-tints-300 w-full px-2 bg-stone-50  ${
          size === "normal" ? "h-8" : "h-6"
        }`}
        {...register}
        // onBlur={(e) => setValue?.(input, "hi")}
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
