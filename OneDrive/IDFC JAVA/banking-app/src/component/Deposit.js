import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Dashboard from './Dashboard';
import Response from './Response';

export const Deposit = () => {
    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const token = localStorage.getItem("access_token");
    
    const config = {

      headers: {

        "Content-Type": "application/json",

        "Authorization": "Bearer " + token

      },

    }
    const onDeposit = (event)=>{
       event.preventDefault();
      const depositRequest = {accountNumber,amount};
        if(accountNumber == 1){
          toast.warning("Please enter Account Number")
        }
        else if(amount == 1){
          toast.warning("Please enter Amount")
        }else{
          axios.post("http://localhost:8080/emp/account/deposit?accountNumber="+ accountNumber +"&depositAmount="+ amount,{},config)
          //  alert(token)
          .then((response) => {
           //alert(response.data)
         toast.success("Amount Credited Successfully");
         alert(amount + " is credited in account number " + accountNumber);
         sessionStorage.user = JSON.stringify(response.data.data[0]);
         localStorage.setItem("status",JSON.stringify(response.data.statusInfo.message));
         localStorage.setItem("account",JSON.stringify(response.data.data[0].accountNumber));
         localStorage.setItem("balance",JSON.stringify(response.data.data[0].accountBalance));
         localStorage.setItem("operation","debited")
         localStorage.setItem("amt",amount);
         window.location.href = "/Response"
           })

      }
    }; 
return (
    <div>
    <br></br>
    <Dashboard/>
<h1 className="mt-5 mb-5" style={{textAlign : "center"}}>Deposit</h1>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  justifyContent:'center'}}>
<form className='container flex-right p-5 ' onSubmit = {()=>Deposit} style={{alignSelf : "right"}} >
<div className="form-group">
    <label className="mt-4">Account Number</label>
    <input type="text" className="form-control mb-3" aria-describedby="emailHelp" onChange = {e => setAccountNumber(e.target.value)} required placeholder="Enter sender's Account Number"/>
    <label >Amount</label>
    <input type="number" className="form-control" onChange = {e => setAmount(e.target.value)} required placeholder="Enter amount"/>
  </div>
<button type="submit" class="btn btn-primary btn-lg mt-3" onClick={onDeposit} >Deposit</button> 
       </form>
       </div>
    </div>

  )
}
export default Deposit