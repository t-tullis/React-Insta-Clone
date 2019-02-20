import React from 'react';
import CommentSection from '../CommentContainer/CommentSection';

import './PostContainer.css'

const Post = (props) =>{
    return(
        <div>
            <div className='post-header'>
                <img className='thumbnail-pic' src={props.post.thumbnailUrl} alt='profile thumbnail' />
                <span className='username'>{props.post.username}</span>
            </div>
            <img className='post-img' src={props.post.imageUrl} alt='post' />
            
            <div className='comment-section'>
            <div className='icons'>
                <i className="far fa-heart fa-lg"></i>
                <i className="far fa-comment fa-lg"></i>
                <p className='likes'>{props.post.likes} likes</p>
            </div>
                <CommentSection comments={props.post.comments}/>
            </div>
        </div>
    )
}

export default Post;