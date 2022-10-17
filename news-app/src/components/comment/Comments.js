import React , {useState }from 'react'
import "../../App.css"

function Comments() {

    
    const  [ comments, setComments] = useState([]);
    const [ comment , setComment] = useState("");
      const [ count , setCount] = useState(0);

    const addItem = () => {
        setComments([...comments , comment]);
        setComment("")
    }

    return (
        <>
        <div className='button'>
        <div>
         <button className='likebtn' onClick={() => setCount((prev) => prev+1)}><i class="fa-regular fa-thumbs-up"></i>Like {count}</button>
         </div>
         <div>
         <button className='commentBtn' ><i class="fa-regular fa-comment"></i></button>
        <input type="text" placeholder='write here'  value={comment} onChange={(e) => setComment(e.target.value)} /> 
        <button className='sendbtn' onClick={addItem}>Send</button>
         </div>
        </div>
        {comments.map((item)=> (
            <div>
            <span>{item}</span>
            <button onClick={()=> {
                let filteredarray = comments.filter((value) => value !== item);
                setComments([...filteredarray]) 
            }}
            >delete</button>
            </div>
        ))}
        </>
    )
}

export default Comments