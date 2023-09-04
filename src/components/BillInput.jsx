import React from "react";

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
        className="px-3 py-1 w-40 text-sm  border-gray-600 border-[1px] rounded-sm ml-2 text-white bg-slate-800"
      />
    </div>
  );
};

export default BillInput;
