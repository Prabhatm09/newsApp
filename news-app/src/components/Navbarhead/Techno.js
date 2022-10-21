
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../../App.css"
import Comments from '../comment/Comments';

//  const searchFilter = React.createContext(posts);
//  console.log(searchFilter)

// export const News = React.CreateContext()


function Techno() {

  const [posts , setPosts] = useState([]);
  const[filterdata , setFilterdata] = useState([])
  const [search , setSearch] = useState("")


  useEffect(()=> {
    axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-10-20&to=2022-10-20&sortBy=popularity&apiKey=7157a116d64c4fb4b809181db475711c`)
    .then((response)=> {
      setPosts([...response.data.articles]);
      setFilterdata([posts , ...response.data.articles])
      // console.log(posts)
    })
  } , [ ])
  
  
  useEffect(()=> {
    const afterfilterdata = posts.filter((post) => {
if(post.title){
  // console.log("inside if")
  // console.log(search , post.title.includes(search))
  return post.title.includes(search);
}
    })
// console.log(afterfilterdata)
setFilterdata(afterfilterdata)
  },[search])



  return (
    <div className='container_home'>
      
      <input type="text" className="searchInput" placeholder='search here' value={search} onChange={(e)=> setSearch(e.target.value)}/>
    {
      filterdata.map((post)=> <>
            <div className='box' key={Math.floor(Math.random()*10000)}>
              <div className='text'>
              <h1 className='title'>{post.title}</h1>
            </div>
            <div className='img_div'>
              <img className='img' src={post.urlToImage} alt="img" ></img>
            </div>
            <div className='author '>
              <span className='author-de'><span className='by'>By</span> <i class="fa-solid fa-arrow-right"></i> {post.author}</span>
              <span className="description"><i class="fa-sharp fa-solid fa-quote-left"></i> {post.description} <i class="fa-sharp fa-solid fa-quote-right"></i></span>
            </div>
            <Comments/> 
            </div> 
            </>
            )
        }
    </div>
  )
}
export default Techno