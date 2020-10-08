import React,{ createContext, useReducer } from "react";

//import the AppReducer

import AppReducer from "./AppReducer";

//Initaila State
const initialState = {

  transactions: [
    // {
    //   id:1,
    //   text:"book",
    //   amount:25
    // },
    //
    // {
    //   id:2,
    //   text:"Laptop",
    //   amount:-25000
    // },
    //
    // {
    //    id:3,
    //   text:"mac",
    //   amount:75000
    // },
    //
    // {
    //    id:4,
    //   text:"I-Pad",
    //   amount:-35000
    // }
  ]
}

//Create Context

export const GlobalContext = createContext(initialState);

//provider Component

export const GlobalProvider = ({ children }) => {

     const [state,dispatch] = useReducer(AppReducer,initialState)

     // Actions
     function deleteTransaction(id) {
         dispatch( {
           type: 'DELETE_TRANSACTION',
           payload: id
            }
        )
     }

     function addTransaction(transaction) {
         dispatch( {
           type: 'ADD_TRANSACTION',
           payload: transaction
            }
        )
     }

    return (

        <GlobalContext.Provider
         value = {
               {
                   transactions: state.transactions,
                   deleteTransaction,
                   addTransaction
               }
         } >

              { children }

        </GlobalContext.Provider>
    )
}
