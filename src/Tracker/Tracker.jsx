import React from "react";
import Wallet from "./Wallet";
import Expenses from "./Expenses";
import BasicPie from "./PieChart";

const Tracker = () => {
  return (
    <div>
      <h1> Expense Tracker </h1>
      <div className="trackerWrapper">
        <Wallet />
        <Expenses />
        <BasicPie />
      </div>
    </div>
  );
};

export default Tracker;
