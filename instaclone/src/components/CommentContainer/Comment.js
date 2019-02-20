import React from 'react';

import './CommentContainer.css'

const Comment = (props) =>{
    return(
        <div className='full-comment'>
            <span className='comment-usr'><strong>{props.comment.username}</strong></span>
            <span className='comment-txt'>{props.comment.text}</span>
        </div>
    )
}

export default Comment;