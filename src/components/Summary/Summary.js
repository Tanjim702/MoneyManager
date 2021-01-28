import Add from "./Add";
import { FaCalculator } from "react-icons/fa";
function Summary({ totalAmounts }) {
  return (
    <div className='row d-flex justify-content-center'>
      <div className="col-sm text-center">Total Income <FaCalculator />{totalAmounts.income}</div>
      <div className="col-sm text-center">Total expense <FaCalculator />{totalAmounts.expense}</div>
      <div className="col-sm text-center">Total asset <FaCalculator />{totalAmounts.asset}</div>
      <div className="col-sm text-center">Total liability <FaCalculator />{totalAmounts.liability}</div>
      <div>
        <Add />
      </div>
    </div>
  );
}

export default Summary;