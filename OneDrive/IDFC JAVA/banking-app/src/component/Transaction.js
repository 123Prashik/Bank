import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import Dashboard from './Dashboard';

export const Transaction = () => {

    const [transactions, setTransactions] = useState([]);
    const [accountNumber, setAccountNumber] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const token = localStorage.getItem("access_token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    }

    const formatDate = (dateValue) => {
        let dateArr = dateValue.split('-');
        let formattedDate = '';
        if (dateArr.length === 3) {
            formattedDate = dateArr[2] + '-' + dateArr[1] + '-' + dateArr[0];
        }
        return formattedDate;
    }

    const retrieveTransactions = () => {
        const transaction = { accountNumber, startDate, endDate }
        axios.get("http://localhost:8080/emp/account/statement?accountNumber=" + accountNumber + "&startDate=" + startDate + "&endDate=" + endDate, {}, config)
            .then((response) => {
                console.log(response.data);
                toast.success("Success");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <br></br>
            <Dashboard />
            <h2 className="page-title">Transaction</h2>
            <div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded " style={{ display: 'flex', justifyContent: 'center' }}>
                <hr />
                <form action="">
                    <div className="form-group">
                        <div className="mb-3">
                            <label className="form-label">Account Number</label>
                            <input onChange={(e) => {
                                setAccountNumber(e.target.value)
                            }}
                                type="text" required placeholder="Enter Account Number" className="form-control"

                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="mb-3">
                            <label className="form-label">Start Date</label>
                            <input onChange={(e) => {
                                setStartDate(formatDate(e.target.value))
                            }}
                                type="date" className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="mb-3">
                            <label className="form-label">End Date</label>
                            <input onChange={(e) => {
                                setEndDate(formatDate(e.target.value))
                            }}
                                type="date" className="form-control"
                            />
                        </div>
                    </div>


                    <div>
                        <button onClick={retrieveTransactions} type="button" className="btn btn-success">View Transaction </button>
                    </div>

                </form>
            </div>
            <div>
                <div className='container'>
                    {/* <div className='mt-5'></div> */}
                    <h3 className='text-center mt-2'>Transaction History</h3>
                    <table className='table table-hover mt-3'>
                        <thead style={{ textAlign: 'center' }}>
                            <tr>
                                <th>Account Number</th>
                                <th>Amount</th>
                                <th>Transaction Type</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {
                                transactions.map(trans =>
                                    <tr key={trans.accountNumber}>
                                        <td>{trans.amount}</td>
                                        <td>{trans.transactionType}</td>
                                        <td>{trans.timeStamp}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Transaction;