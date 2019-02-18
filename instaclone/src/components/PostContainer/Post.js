import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './postContainer.css'

const Post = (props) =>{
    return(
        <div className='post-container'>
            {props.user.map(post => {
                console.log(post)
                return (
                <div className ="posts">
                    <div className='top-post-info'>
                        <img className='profile-thumb' src={post.thumbnailUrl} />
                        <p>{post.username}</p>
                    </div>
                
                    <img src={post.imageUrl} />
                        
                    <div className ='comments'>
                    <h5>{post.likes} likes</h5>
                    {post.comments.map(comment => {
                        return(
                            <div>
                                <CommentSection comment={comment} />
                            </div>
                        )
                    })}
                        <div>
                            <form className= 'comment-input'>
                                <input type='text'
                                placeholder = 'Add a comment...' />
                            </form>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Post;