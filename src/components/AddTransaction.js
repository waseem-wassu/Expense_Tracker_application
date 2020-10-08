import React,{ useState, useContext } from "react";

import { GlobalContext} from "../context/GlobalState";

const AddTransaction = () => {
  const [ text,setText ] = useState("");
  const [ amount,setAmount ] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction =  {
        id:Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    }

     addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add New Transaction</h3>

      <form onSubmit = { onSubmit } className="transaction-form">
      <label htmlFor="text">
        <input type="text" value ={text} onChange={(e) => setText(e.target.value)} placeholder="Description *" required/>
      </label>
          <br/>
         <span> Negative - Expense, Positive - Income</span>

        <label htmlFor="text">
           <input type="number" value ={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount *" required/>
        </label>

        <br/>

        <input className="btn" type="submit" value="Add New transaction" />

      </form>
      </div>
  )
}

export default AddTransaction;
