import React  from 'react';
import Header from "./components/Header";
import Balance from "./components/Balance";
import AccountSummary from "./components/AccountSummary";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";


  //import global provider
import {GlobalProvider} from "./context/GlobalState";

import './App.css';


function App() {

  return (
      <GlobalProvider>
        <div className="container">
            <Header />
            <Balance />
            <AccountSummary />
            <TransactionHistory />
            <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;
