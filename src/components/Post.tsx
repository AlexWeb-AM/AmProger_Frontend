import React from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";

interface Post_content_types {
  img:string;
  name:string;
  text:string;
}

export const Post:React.FC<Post_content_types> = ({img,name,text}) => {
  return (
    <div className='post_div'>
        <img src={img} alt={name} />
        <div className='text_div'>
          <h1>{name}</h1>
        <p>{text}</p>
        </div>
        <div className='buttons_div_post'>
          <button><BiLike /></button>
          <button><FaRegCommentDots /></button>
          <button><FaRegBookmark /></button>
          <button ><LuShare2 /></button>
        </div>
    </div>
  )
}
