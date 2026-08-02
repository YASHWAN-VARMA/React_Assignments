import React from 'react'
import  { useState } from "react";
import LikeCount from "./LikeCount";
import LikeButton from "./LikeButton";
const Likes = () => {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };
  return (
    <div>
      <LikeCount likes={likes} />
      <LikeButton handleLike={handleLike} />
    </div>
  );
}


export default Likes