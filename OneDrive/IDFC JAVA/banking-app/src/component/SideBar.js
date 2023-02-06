import React, { children } from "react";
import { FaCalendar } from 'react-icons/fa';

import {

    FaBars,

    FaRegChartBar,

    FaShoppingBag,

    FaTh,

    FaUserAlt,

} from "react-icons/fa"

import { NavLink } from "react-router-dom";

import Deposit from "./Deposit";

import Withdraw from "./Withdraw";




const Sidebar = ({ children }) => {

    const menuItem = [



        {

            NavLink: "/deposit",

            name: "Deposit",

            icon: <FaTh />

        },

        {

            path: "/withdraw",

            name: "Withdraw",

            icon: <FaUserAlt />

        },

        {

            path: "/transfer",

            name: "/Transfer",

            icon: <FaRegChartBar />

        },

        {

            path: "/transaction",

            name: "Transaction",

            icon: <FaShoppingBag />

        },



    ]

    return (



        <div className="container">

            <div className="sidebar">

                <div className="top-section">

                    <h1>EMS Bank</h1>

                    <div className="bars">

                        <FaBars />

                    </div>

                </div>



                {

                    menuItem.map((item, index) => {

                        <NavLink to={item.path} key={index} className="link" activeclassName="active">

                            <div className="icon">{item.icon}  </div>

                            <div className="link_text">{item.name}</div>

                        </NavLink>



                    })

                }

            </div>

            <main>{children}</main>

        </div>

    )

}

export default Sidebar;