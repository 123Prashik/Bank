import React, { useState } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios'
import { toast } from 'react-toastify';
import Response from './Response';

export const Withdraw = () => {

    const [accountNumber,setAccountNumber] = useState('');
    const [amount,setAmount] = useState('');
    const token = localStorage.getItem("access_token");
    const config = {

      headers: {

        "Content-Type": "application/json",

        "Authorization": "Bearer " + token

      },
    }
      const onWithdraw = (event)=>{
        event.preventDefault();
        const body = {accountNumber,amount};
        if(accountNumber == 1){
          toast.warning("Please enter Account Number")
        }
        else if(amount == 1){
          toast.warning("Please enter Amount")
        }else{
          axios.post("http://localhost:8080/emp/account/withdraw?accountNumber="+ accountNumber +"&withdrawAmount="+amount,{},config)
        .then((response)=>{
          // alert(response.data)
            toast.success("Amount Debited Successfully");
           alert(amount + " is debited from account number " + accountNumber);
           sessionStorage.user = JSON.stringify(response.data.data[0]);
           localStorage.setItem("status",JSON.stringify(response.data.statusInfo.message));
           localStorage.setItem("account",JSON.stringify(response.data.data[0].accountNumber));
           localStorage.setItem("balance",JSON.stringify(response.data.data[0].accountBalance));
           localStorage.setItem("operation","debited")
           localStorage.setItem("amt",amount);
           window.location.href = "/Response";
             })
         

        }
      };
        // const handleClick = (event)=>{
        //   event.preventDefault();
        //   axios.post("http://localhost:8080/emp/account/withdraw?accountNumber=" + accountNumber + "&withdrawAmt=" + amount)
        //   .then((response)=>{
        //       alert(amount + " is debited from account number" + accountNumber);
        //       sessionStorage.user = JSON.stringify(response.data);
        //       window.location.href = "/DashBoard";
        //   })
        // } 

  return (
<div>
    <br></br>
    <Dashboard/>
<h1 className="mt-5 mb-5" style={{textAlign : "center"}}>Withdraw</h1>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  justifyContent:'center'}}>
    
    <form className='container flex-right p-5 ' onSubmit = {()=>Withdraw} style={{alignSelf : "right"}} action='http://localhost:8080/emp/account/withdraw' method='post' >
  <div className="form-group">
    <label className="mt-4">Account Number</label>
    <input type="text" className="form-control mb-3" aria-describedby="emailHelp" onChange = {e => setAccountNumber(e.target.value)} required placeholder='Enter Account Number'/>
    <label >Amount</label>
    <input type="text" className="form-control" onChange = {e => setAmount(e.target.value)} required placeholder='Enter Amount'/>
  </div>

  <button type="submit" class="btn btn-primary btn-lg mt-3" onClick={onWithdraw}>Withdraw</button>
</form>
</div>
</div>

  )
}
export default Withdraw;