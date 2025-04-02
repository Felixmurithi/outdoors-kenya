function SelectCurrency({ register, id }: any) {
  return (
    <div>
      <label htmlFor={id}></label>
      <select {...register} id={id}>
        <option value="kes">Kshs</option>
        <option value="usd">USD</option>
      </select>
    </div>
  );
}

export default SelectCurrency;
