import React, { useEffect, useState } from "react"
import { NavLink,Link } from "react-router-dom"
import Dashboard from "./Dashboard"
import Sidebar from "./SideBar"



export default function LoginSuccess() {
    const [username,setUsername] = useState("")
    
    useEffect(() => {

        setUsername(localStorage['username'])
    
      }, [])

    return (
    
            <div>
                <Dashboard />
                <div style={{ padding: '10px' }} className="alert alert-success" role="alert">
                    <p style={{ textAlign:  'center'}} behavior="" direction="">Wel-Come Back <b>{username}</b> </p>
                </div>
                    <Sidebar></Sidebar>
            </div>
       
   
    )
}