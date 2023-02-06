import React, { useEffect, useState } from "react"
import { NavLink,Link } from "react-router-dom"


export default function Dashboard() {
    // const [username,setUsername] = useState("")
    
    // useEffect(() => {

    //     setUsername(sessionStorage['username'])
    
    //   }, [])

    return (
        
            <div className='pt-6'>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-lg- ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-left" id="navbar">
                            <ul className="nav nav-pills me-auto mb-2 mb-lg-0">
                            {/* <ul class="nav flex-column"> */}
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/dashboard">Home</NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/transfer">Fund Transfer</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/transaction">Transaction History</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/deposit">Deposit</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
                                </li>
                                {/* <input type="text" placeholder="Search here"></input>
                                <button type="submit" className="btn btn-primary" style={{
                                    float: "right"
                                }}>Search</button> */}
                                <a className="btn btn-outline-primary position-absolute top-10 end-0"
                                    role={"button"}
                                    href="/login">Logout</a>

                            </ul>
                            {/* </ul> */}
                        </div>
                    </div>
                </nav>
                {/* <div style={{ padding: '10px' }} className="alert alert-success" role="alert">

          <p style={{ textAlign:  'center'}} behavior="" direction="">Wel-Come Back <b>{username}</b> </p> */}

        </div>
            
       
   
    )
}