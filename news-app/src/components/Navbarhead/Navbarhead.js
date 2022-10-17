import React, { useState } from 'react'
import "../../App.css"


function Navbarhead() {
 
    const [ navbar , setNavbar] = useState(false)

  return (
    <>
    <header>
        <div className='nav_container' >
            <nav>
                <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
                   <li>Home</li>
                   <li>Contact</li>
                   <li>sports</li>
                    <li>tech</li>
                   <li>market</li>
                   <li>world</li>
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