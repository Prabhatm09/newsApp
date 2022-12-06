import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../../App.css"
import Comments from '../comment/Comments';




function Homepage(props) {

  const [posts, setPosts] = useState([]);
  const [filterdata, setFilterdata] = useState([])
  const [search, setSearch] = useState("")
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-05&sortBy=publishedAt&apiKey=7157a116d64c4fb4b809181db475711c`)
      .then((response) => {
        setPosts([...response.data.articles]);
        setFilterdata(response.data.articles)
        // console.log(posts)
        setLoading(false)
      })
  }, [])


  useEffect(() => {
    const afterfilterdata = posts.filter((post) => {
      if (post.title) {
        // console.log("inside if")
        // console.log(search , post.title.includes(search))
        return post.title.includes(props.searchKey);
      }
    })
    // console.log(afterfilterdata)
    setFilterdata(afterfilterdata)
  }, [props.searchKey])



  return (
    <div className='container_home'>
      {
        isLoading ? (<p className="loader">loading</p>) : ("")
      }

      {
        filterdata.map((post) => <>
          <div className='box' key={Math.floor(Math.random() * 10000)}>
            <div className='text'>
              <h1 className='title'>{post.title}</h1>
            </div>
            <div className='img_div'>
              <img className='img' src={post.urlToImage} alt="img" ></img>
            </div>
            <div className='author '>
              <span className='author-de'><span className='by'>By</span> <i class="fa-solid fa-arrow-right"></i> {post.author}</span>
              <span className="description"><i class="fa-sharp fa-solid fa-quote-left"></i> {post.description}<i class="fa-sharp fa-solid fa-quote-right"></i></span>
            </div>
            <Comments />
          </div>
        </>
        )
      }
    </div>
  )
}

export default Homepage
