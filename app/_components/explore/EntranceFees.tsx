import Link from "next/link";

// cuureny array is mao

type EntranceFeesTable = [string[], number[], number[]];

export default function EntranceFees({
  tableData,
}: {
  tableData: EntranceFeesTable;
}) {
  // the fees should be passed as an array with 3 nested arrays with fees, the two arrays map two rows with the nested arrays as data
  return (
    <table className="border border-stone-600">
      <caption className=" text-deepSeaweed-tints-800 font-semibold p-2 text-left text-base">
        Fees
      </caption>
      <thead>
        <tr>
          <th></th>
          {["Kenyan", "Kenyan Resident", "Non-Resident"].map((type, index) => (
            <th className="p-2 border border-stone-600 " key={index}>
              <div className="flex flex-col">
                <span className="font-normal">{type}</span>
                <span className="font-light text-sm">
                  {tableData[0][index]}
                </span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: number[], i) => {
          if (i === 0) return;
          return (
            <tr key={i}>
              <td className="border border-stone-600 p-2">
                {["adult", "child"][i - 1]}
              </td>
              {row.map((fee, i) => (
                <td className="p-2 border border-stone-600" key={i}>
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
