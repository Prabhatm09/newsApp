import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../../App.css"
import Comments from '../comment/Comments';
import Techno from "./Techno"
import WbSunnyIcon from '@mui/icons-material/WbSunny';




function Homepage(props) {

  const [posts, setPosts] = useState([]);
  const [filterdata, setFilterdata] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });


  useEffect(() => {
    setLoading(true);
    axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`)
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


  const handleTheme = () => {
    if (theme.color === "black") {
      setTheme({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
    <div className='container_home' style={theme}>
      {
        isLoading ? (<p className="loader">loading</p>) : ("")
      }
      <button className="toggleBtn" onClick={handleTheme}>
      <WbSunnyIcon/>
      </button>
      {
        filterdata.map((post) => <>
          <div className='box' key={Math.floor(Math.random() * 10000)}>
            <div className='title_container'>
              <h1 className='title'>{post.title}</h1>
            </div>
            <div className='img_div'>
              <img className='img' src={post.urlToImage} alt="img" ></img>
            </div>
            <div className='author '>
              <span className="description"><i class="fa-sharp fa-solid fa-quote-left"></i> {post.description.length > 300 ?  `${post.description.substring(0 , 180)}...` : `${post.description}`}<i class="fa-sharp fa-solid fa-quote-right"></i></span>
            </div>
            <Comments />
          </div>
          <Techno/>
        </>
        )
      }
    </div>
    </>
  )
}

export default Homepage
