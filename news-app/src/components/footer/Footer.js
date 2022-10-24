import React , { useState } from 'react'
import "../../App.css"

function Footer() {
 let time = new Date().toLocaleTimeString();

 const [ctime , setTime] = useState(time)

 const updateTime = () => {
   time =  new Date().toLocaleTimeString();
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