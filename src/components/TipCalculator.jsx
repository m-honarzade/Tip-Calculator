import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Button from "./Button";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [serviceSatisfy, setServiceSatisfy] = useState("");
  const [friendServiceSatisfy, setFriendServiceSatisfy] = useState("");
  const tip = bill * ((serviceSatisfy + friendServiceSatisfy) / 2 / 100);

  const resetHandler = () => {
    setBill("");
    setServiceSatisfy(0);
    setFriendServiceSatisfy(0);
  };
  return (
    <div className="flex flex-col gap-y-4">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={serviceSatisfy}
        onSetPercentage={setServiceSatisfy}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={friendServiceSatisfy}
        onSetPercentage={setFriendServiceSatisfy}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Button
            onResetHandler={resetHandler}
            bgColor="bg-slate-800"
            textColor="text-white"
          >
            Reset
          </Button>
        </>
      )}
    </div>
  );
};

export default TipCalculator;
