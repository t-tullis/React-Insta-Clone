import React from 'react';
import Comment from '../CommentSection/Comment';
import './postContainer.css'

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         user: props.user
        }
        console.log(this.state)
    }
    render(){
    return(
        <div className='post-container'>
            {this.state.user.map((post) => {
                return (
                <div key={post.timeStamp} className ="posts">
                    <div className='top-post-info'>
                        <img className='profile-thumb' src={post.thumbnailUrl} alt='profile' />
                        <p>{post.username}</p>
                    </div>
                
                    <img src={post.imageUrl} alt='Post'/>
                        
                    <div className ='comments'>
                        <div className='icons'>
                            <i className="far fa-heart fa-lg"></i>
                            <i className="far fa-comment fa-lg"></i>
                        </div>
                        <h5>{post.likes} likes</h5>
                        {post.comments.map((comment, i) => {
                        return(
                            <div>
                                <Comment key={i} comment={comment} />
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
                </div >
                )
            })}
        </div>
    )
}
}



export default Post;