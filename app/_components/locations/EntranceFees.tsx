import Link from "next/link";

export default function EntranceFee({ tableData }: { tableData: number[][] }) {
  return (
    <div className=" grid-cols-[auto_auto_auto_fitcontent] grid-rows-4 border inline-grid">
      <span className="col-span-4 text-2xl font-bold p-2">Entrance Fees</span>

      <span className="border"></span>
      <TableHeader currency={["Kshs", "Kshs", "USD"]} />

      <div className="row-start-3 row-end-5 grid-rows-subgrid grid">
        <span className="row-start-1 p-2">Adult</span>
        <span className="row-start-2 p-2">Child</span>
      </div>
      <div className="col-span-3 grid grid-cols-subgrid row-span-2 border-inherit">
        {tableData.map((row: number[], i) =>
          row.map((fee, i) => (
            <span className="p-2 border-inherit" key={i}>
              {fee}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Renders a table header with the currency options for each
 * column: Kenyan, Kenyan Resident, Non-Resident.
 *
 * @param {{ currency: string[] }} props
 * @prop {string[]} currency - An array of three strings, the
 *   currencies for the columns.
 */
function TableHeader({ currency }: { currency: string[] }) {
  return (
    <>
      <div className="flex  flex-col border p-2">
        <span>Kenyan</span>
        <span className="">{currency[0]}</span>
      </div>
      <div className="flex  flex-col border p-2">
        <span>Kenyan Resident</span>
        <span>{currency[1]}</span>
      </div>

      <div className="flex flex-col border p-2">
        <span>Non-Resident</span>
        <span>{currency[2]}</span>
      </div>
    </>
  );
}

//NOTE
// some nuances in programming like css grid tracks and how the work
