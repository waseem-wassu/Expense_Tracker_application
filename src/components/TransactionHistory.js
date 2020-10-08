import React,{ useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";


const TransactionHistory = () => {
   const { transactions } = useContext(GlobalContext);

   // console.log(transactions);
  return (
    <div  >
        <h3>Transaction History</h3>

        <ul className="trnsaction-list">

          { transactions.map(transaction => (

                <Transaction key={transaction.id} transaction = {transaction} />
          ))}


        </ul>

    </div>
  )
}

export default TransactionHistory;
