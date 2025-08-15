import { useState } from "react";


export default function LikeButton() {
    let [isLiked,setISLiked] = useState(false);
    let[clicks,setClicks] = useState(0);

    let toggleLike = () =>{
        setISLiked(!isLiked);
        setClicks(clicks+1);
    };

    let likeStyle = {color : "red"};

    return (
        <div>
            <h3>Clicks = {clicks}</h3>
            <h2 onClick={toggleLike}>
            {isLiked ? (
                <i className="fa-solid fa-heart" style={likeStyle}></i>
            ):(
                <i className="fa-regular fa-heart"></i>
            )
            }
            </h2>
        </div>
    );
}