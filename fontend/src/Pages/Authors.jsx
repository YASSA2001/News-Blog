import React, { useState } from 'react'
import img3 from '../images/img3.jpg'
import {Link} from 'react-router-dom'

const authorsData = [
  {id:1, avatar: img3, name:'yasindu', posts:3},
  {id:2, avatar: img3, name:'naveen', posts:2},
  {id:3, avatar: img3, name:'senuja', posts:1},
  {id:4, avatar: img3, name:'kojitha', posts:0},
]

export const Authors = () => {

 const [authors, setAuthors]  = useState(authorsData)
  return (
    <section className="authors">
     {authors.length > 0 ? <div className="container authors__container">
      {
        authors.map(({id,avatar, name, posts})=>{
          return <Link to={`/posts/users/${id}`} key={id} className='author'>
            <div className="author__avatar">
              <img src={avatar} alt={`image of ${name}`} />
            </div>
            <div className="author__info">
              <h4>{name}</h4>
              <p>{posts}</p>
            </div>
          </Link>
        })
      }

      </div>: <h2 className='center'>Authors Not Found</h2>}
    </section>
  )
}
