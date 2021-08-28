import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar({no,name}){
    return(
        <div className="navbar">
            <h3>{no}</h3>
                <h3>{name}</h3>
                <Link to="/">
                    <div className="menu-btn">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </Link>
        </div>
    )
}

export default Navbar