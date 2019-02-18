import React from 'react';

import './commentSection.css'

const CommentSection = (props) => {
    return(
            <div className = "post-card">
                <h4 className='comment'>{props.comment.username}</h4>
                <p>{props.comment.text}</p>

            </div>
    )
}

export default CommentSection;