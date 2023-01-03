
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../../App.css"


function Techno(props) {

  const [filterdata, setFilterdata] = useState([])

  useEffect(() => {
    axios.get(`techno.json`)
      .then((response) => {
        setFilterdata(response.data)
      })
  }, [])



  return (
    <div className='container_home_techono'>
<h1 className='headlines'>Headlines</h1>
      {
        filterdata.map((post) => <>
          <div className='box_techno'>
            <div className='heading_techno'>
              <h1 className='title_techno'>{post.title}</h1>
            </div>
            <div className='img_div_techno'>
              <img className='img' src={post.urlToImage} alt="img" ></img>
            </div>
          </div>
        </>
        )
      }
    </div>
  )
}
export default Techno