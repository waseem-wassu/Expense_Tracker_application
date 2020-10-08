import React,{ useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ( { transaction } ) => {
  const { deleteTransaction } = useContext(GlobalContext);


  const sign = transaction.amount < 0 ? "-" : "+";

  return (

        <li className="TranscationStyle">
          {transaction.text}

            <span> { sign }${Math.abs(transaction.amount)} </span>
            <button className="btn-danger" onClick = { () => deleteTransaction(transaction.id) } >X</button>
        </li>

  )
}

export default Transaction;
