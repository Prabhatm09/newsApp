import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../../App.css"
import Comments from '../comment/Comments';

function Homepage() {

  const [posts , setPosts] = useState([]);


  useEffect(()=> {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=7157a116d64c4fb4b809181db475711c`)
    .then((response)=> {
      setPosts([...response.data.articles]);
      // console.log(posts)
    })
  } , [])



  return (
    <div className='container_home'>
    {
            posts.map((post)=> <>
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

export default Homepage
