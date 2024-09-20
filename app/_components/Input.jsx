function Input({ classes, id, type = "text", children }) {
  return (
    <input
      id={id}
      type={`${type}`}
      placeholder={children}
      className={`${classes} rounded-sm h-8  border border-deepSeaweed-tints-300 text-deepSeaweed-tints-300 w-full px-2`}
    />
  );
}

export default Input;
