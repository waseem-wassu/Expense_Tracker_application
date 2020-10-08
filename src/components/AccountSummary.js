import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const AccountSummary = () => {

  const  { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
   .filter(item => item > 0 )
   .reduce((acc,item) => (acc += item),0)
   .toFixed(2);
  const expense = ( amounts
   .filter(item => item < 0 )
   .reduce((acc,item) => (acc += item),0) * -1
 )
   .toFixed(2);


  return (
      <div className="expense-container">
        <h3>Income <br/><span className="Colr-1"> ${income}</span></h3>
        <h3>Expense <br/> <span className="Colr-2"> ${expense} </span></h3>
    </div>
  )
}

export default AccountSummary;
