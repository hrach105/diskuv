import React from 'react'
import { Link } from 'gatsby'

const PostItem = ({PostImage,PostDate,PostTitle,PostContent}) => {
  return (
        <div className="post-item">
            <img className='post-image' src={PostImage} alt="" />
            <p className='post-date'>{PostDate}</p>
            <h3 className='post-title'>{PostTitle}</h3>
            <p className='post-content'>{PostContent}</p>
            <Link className='read-more' to="#">Read more</Link>
        </div>
  )
}

export default PostItem