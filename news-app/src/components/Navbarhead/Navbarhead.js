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
                   <li><NavLink to="/" >Home</NavLink></li>
                   <li><NavLink to="/contact" >Contact</NavLink></li>
                   <li><NavLink to ="/Techno">Techno</NavLink></li>
                   <li><NavLink to="./Business">Market</NavLink></li>
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