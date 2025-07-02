import Input from "@/app/_components/generic/Input";
import { useFormState } from "react-hook-form";

// cuureny array is mao

type EntranceFeesData = (string[] | number[])[];

export default function EntranceFees({
  entraceFeesData,
}: {
  entraceFeesData: EntranceFeesData;
}) {
  // the fees should be passed as an array with 3 nested arrays with fees, the two arrays map two rows with the nested arrays as data
  return (
    <table className="border border-stone-600  font-semibold ">
      <caption className=" text-stone-800 font-semibold p-2 text-left text-base ">
        <div className="flex gap-3">
          <img src="/icons/toll.svg" alt="fees icon" />
          <span>Fees</span>
        </div>
      </caption>

      <thead>
        <tr>
          <th></th>
          {["Kenyan", "Kenyan resident", "non-resident"].map((type, index) => (
            <th
              className="p-2 border border-stone-600 text-stone-600"
              key={index}
            >
              <div className="flex flex-col">
                <span className="">{type}</span>
                <span className="text-stone-500 text-sm font-medium">
                  {entraceFeesData[0][index]}
                </span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {entraceFeesData.map((row, i) => {
          if (i === 0) return;
          return (
            <tr key={i} className="text-stone-500">
              <td
                className="border border-stone-600  p-4"
                //label
              >
                {["adult", "child"][i - 1]}
              </td>
              {row.map((fee, i) => (
                <td className=" border border-stone-600 p-4" key={i}>
                  {fee}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

//NOTE
// some nuances in programming like css grid tracks and how the work

//INSIGHT
// undefined is displayed as zero
