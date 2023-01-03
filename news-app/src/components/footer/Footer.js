import React , { useState } from 'react'
import "../../App.css"

function Footer() {
 let time = new Date().toLocaleString();

 const [ctime , setTime] = useState()

 const updateTime = () => {
  setTime(time);
 }

 setInterval(updateTime ,1000)



  return (
    <div className='flex footer'>
        <p>prabhat@1345gmail.com</p>
        <p>{time}</p>
        
    </div>
  )
}

export default Footer