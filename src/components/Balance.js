import React,{ useContext } from "react";
import {GlobalContext} from "../context/GlobalState";

const Balance = () => {
  const  { transactions } = useContext(GlobalContext);
  // console.log("i am from balnce", transactions)
  const amounts = transactions.map(transaction => transaction.amount);
  // console.log(amounts);
  const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
  // console.log(total);
  return (
    <div>
          <h4>Balance</h4>
          <h1>${total}</h1>

    </div>
  )
}

export default Balance;
