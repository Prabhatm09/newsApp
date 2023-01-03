import React, { useState } from 'react'
import "../../App.css"
import { NavLink } from "react-router-dom"



function Navbarhead() {
 
    const [ navbar , setNavbar] = useState(false)

  return (
    <>
    <header>
        <div className='nav_container' >
            <nav>
                <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
                   <li><NavLink    className={({ isActive }) => (isActive ? "active-link" : "nav")} to="/" >Home</NavLink></li>
                   <li><NavLink    className={({ isActive }) => (isActive ? "active-link" : "nav")} to="/contact" >Contact</NavLink></li>
                   <li><NavLink    className={({ isActive }) => (isActive ? "active-link" : "nav")} to="./About">About us</NavLink></li>
                   <li><NavLink    className={({ isActive }) => (isActive ? "active-link" : "nav")} to="./Video">Video</NavLink></li>
                </ul>
                <div className="baricon" onClick={() => setNavbar(!navbar)}>
                    {navbar ? <i class="fa-solid fa-xmark"></i> :  <i class="fa-solid fa-bars"></i>}
                </div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbarhead