import { Link } from 'gatsby';
import React from 'react'
import  PostImage  from "../../images/postimage.jpg";
import './post.scss'
import PostItem from './PostItem'
const Post = () => {
  return (
    <div className='latest-posts'>
        <div className="post-heading">
            <h2>Latest blog articles</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
        </div>
      <div className="post-grid">
        <PostItem
                PostImage={PostImage}
                PostDate="January 2022"
                PostTitle='Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr'
                PostContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
            />
            <PostItem
                PostImage={PostImage}
                PostDate="January 2022"
                PostTitle='Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr'
                PostContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
            />
            <PostItem
                PostImage={PostImage}
                PostDate="January 2022"
                PostTitle='Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr'
                PostContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
            />
      </div>
        <Link className='view-all-post' to='#'>View All Posts</Link>

    </div>
  )
}

export default Post