import React from 'react'
import "../../App.css"

function Footer() {
 let showDate = new Date();
 let displayTime = showDate.getHours()+':'+showDate.getMinutes()+':'+showDate.getSeconds();
 let dt = showDate.toDateString()

  return (
    <div className='flex footer'>
        <p>prabhat@1345gmail.com</p>
        <p>{dt} - {displayTime}</p>
        
    </div>
  )
}

export default Footer