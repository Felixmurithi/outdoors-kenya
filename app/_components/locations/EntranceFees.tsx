import Link from "next/link";

// cuureny array is mao
export default function EntranceFees({ tableData }: { tableData: number[][] }) {
  return (
    <table className="border border-stone-600">
      <caption className="text-2xl font-bold p-2 text-left">Fees</caption>
      <thead>
        <tr>
          <th></th>
          {["Kenyan", "Kenyan Resident", "Non-Resident"].map((type, index) => (
            <th className="p-2 border border-stone-600 " key={index}>
              <div className="flex flex-col">
                <span>{type}</span>
                <span className="font-light text-sm">
                  {["Kshs", "Kshs", "USD"][index]}
                </span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: number[], i) => (
          <tr key={i}>
            <td className="border border-stone-600 p-2">
              {["adult", "child"][i]}
            </td>
            {row.map((fee, i) => (
              <td className="p-2 border border-stone-600" key={i}>
                {fee}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//NOTE
// some nuances in programming like css grid tracks and how the work
