import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard';


export const Transfer = () => {

    const [fromAccountNumber,setFromAccountNumber] = useState('');
    const [toAccountNumber,setToAccountNumber] = useState('');
    const [amount,setAmount] = useState('');
    const token = localStorage.getItem("access_token");
    //  alert(token)
    const config = {
        headers: {
        "Content-Type": "application/json",

        "Authorization": "Bearer " + token

      },

    }
      const onTransfer = (event)=>{
        event.preventDefault();
        const transferRequest = {fromAccountNumber,toAccountNumber,amount};
        if(fromAccountNumber.length == 1){
          toast.warning("Please enter fromaccount Number")
        }else if(toAccountNumber == 1){
          toast.warning("Please enter toaccount Number")
          
        }else{
          // const token = sessionStorage.getItem('access_token');
          // console.log(token);
          axios.post("http://localhost:8080/emp/account/send",{},config)
          .then((response) => {
            // alert(config)
            alert(response.data)
            toast.success("Transfer Amount Successfully")
          })
      
        }
      };  

  return (
<div>
    <br></br>
    <Dashboard/>
<h1 className="mt-5 mb-5" style={{textAlign : "center"}}>Fund Transfer</h1>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  justifyContent:'center'}}>
    
    <form className='container flex-right p-5 ' onSubmit = {()=>Transfer} style={{alignSelf : "right"}} action='http://localhost:8080/emp/account//trans/stmt/' method='post' >
  <div className="form-group">
    <label className="mt-4">Sender Account Number</label>
    <input type="text" className="form-control mb-3" aria-describedby="emailHelp" onChange = {e => setFromAccountNumber(e.target.value)} required placeholder="Enter sender's Account Number"/>
    <label >Receiver Account Number Date</label>
    <input type="text" className="form-control mb-3" onChange = {e => setToAccountNumber(e.target.value)} required placeholder="Enter receiver's Account Number"/>
    <label >Amount</label>
    <input type="number" className="form-control" onChange = {e => setAmount(e.target.value)} required placeholder="Enter amount"/>
  </div>

  <button type="submit" class="btn btn-primary btn-lg mt-3" onClick={onTransfer} >Transfer</button>
</form>
</div>
</div>

  )
}
export default Transfer;