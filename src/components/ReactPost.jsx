import PostLiked from './PostLiked';
import { useState } from "react"
/*import { FaThumbsUp } from "react-icons/fa";*/



const ReactPost = ({question, answer })=>{
    const [LikeBtn, setLikeButton] = useState(false);


    return(
        <div className ="postCard">
            <div className ="postCard-container">
                <h2>{question}</h2>
                <p>{answer}</p>
            </div>

            <button className="btnLike" onClick={()=>setLikeButton(!LikeBtn)}> {LikeBtn? <PostLiked/>: <p>Like 👍</p>} {!LikeBtn} </button>
            
        </div>
    )
}

export default ReactPost