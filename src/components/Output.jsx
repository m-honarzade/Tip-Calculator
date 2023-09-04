const Output = ({ bill, tip }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <h3 className="font-semibold">
        You should pay :{" "}
        <span className="text-slate-800 font-bold">${bill + tip} </span>
        (${bill} + ${tip})
      </h3>
    </div>
  );
};

export default Output;
