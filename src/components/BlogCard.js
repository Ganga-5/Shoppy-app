import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src='../../images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date'>16 Oct, 2023</p>
        <h5 className='title'>A beautiful sunday morning renaissance</h5>
        <p className='desc'>
          You're only as good as your last collection, which is an enormous Pressure.
          I think there is somthing about...
        </p>
        <Link to='/blog/:id' className='button'>
          Read More
        </Link>
      </div>
    </div>
  )
}
