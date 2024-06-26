import React from 'react'
import { PostAuthor } from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import img1 from '../images/img1.jpg'

export const PostDetails = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
        </div>
        <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edite</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title!</h1>
      <div className="post-detail thumbnail">
        <img src={img1} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        fugiat laudantium culpa totam animi laborum reiciendis saepe impedit
        beatae? Vitae totam pariatur quos praesentium nulla facere amet nihil
        deserunt nisi.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        nobis. Voluptate aliquam rem provident, fugit aliquid deleniti vitae
        culpa quisquam quo quae libero recusandae. Tempore exercitationem omnis
        fugit libero, voluptate at qui accusantium eos soluta unde consequatur
        velit voluptates, quam nesciunt ut molestiae numquam labore distinctio
        vero porro repudiandae! Quibusdam blanditiis aliquid ducimus beatae
        vitae quis nemo nostrum harum modi dolore, veritatis, quos in officia?
        Aliquam, rem? Doloremque, veritatis id porro esse dignissimos, numquam
        perferendis delectus omnis consequuntur, sint a dolorum eius minima
        ratione deserunt quidem sequi voluptatem praesentium. Ex explicabo atque
        quaerat voluptas? Qui veritatis quia sapiente similique harum?
      </p>
    </section>
  );
}
