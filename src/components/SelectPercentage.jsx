const SelectPercentage = ({ percentage, onSetPercentage, children }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <label className="whitespace-nowrap">{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(+e.target.value)}
        className="px-3 py-1 w-40 text-xs text-white bg-slate-800 border-gray-600 border-[1px] rounded-sm ml-2"
      >
        <option value="" disabled selected>
          Select your option
        </option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
