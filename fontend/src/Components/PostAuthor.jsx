import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../images/img2.jpg'

export  const PostAuthor = () => {
  return (
    
    <Link to={`/posts/users/sdfsdf`} className='post__author'>
        <div className='post__author-avatar'>
            <img src={img2} alt="" />
        </div>
        <div className='post__author-details'>
            <h5>By: Yasindu Pasanjith</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}
