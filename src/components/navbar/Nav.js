import React from 'react'
import "./Nav.css"
import logo from "../../images/logo.svg"
import bars from "../../images/Vector.svg"

function Nav() {
    return (
        <div className='navbar'>
            <div className="nav_half">
                <div className="nav_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav_menu">
                    <ul>
                        <li><a href="/">THE STUDIO</a></li>
                        <li><a href="/">PROJECT</a></li>
                        <li><a href="/">ARCHITECTURE</a></li>
                        <li><a href="/">BLOG</a></li>
                    </ul>
                </div>
            </div>
            <div className="nav_end">
                <button>CONTACT</button>
                <img src={bars} alt="" />
            </div>
        </div>
    )
}

export default Nav