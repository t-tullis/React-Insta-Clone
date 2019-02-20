import React from 'react';
import CommentSection from '../CommentContainer/CommentSection';

const Post = (props) =>{
    return(
        <div>
            <img src={props.post.imageUrl} />
            <CommentSection comments={props.post.comments}/>
        </div>
    )
}

export default Post;