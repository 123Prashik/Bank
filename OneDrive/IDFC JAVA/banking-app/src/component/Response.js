import React, { Component } from "react";
import Dashboard from "./Dashboard";

export const Response = () => {
    const status =      localStorage.getItem("status").substring(1,8);
    const account =     localStorage.getItem("account").slice(2,8);
    const balance =     localStorage.getItemgetItem("balance");
    const amt =         localStorage.getItem("amt");
    const operation =   localStorage.getItem("operation")
    
    return(
        <div>
            <Dashboard />
            <br></br>
            <div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded " style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Dear Customer, Your transaction is {status}. Your account XX{account} is {operation} by Rs {amt}.
                Avl Bal : Rs {balance}.
                Thank You.</p>
            </div>
        </div>
    )
           
}

export default Response;