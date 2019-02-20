import React from 'react';
import CommentSection from '../CommentContainer/CommentSection';

import './PostContainer.css'

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        likes: props.post.likes
        }
    }
    addLike = () =>{
        let likes = this.state.likes + 1;
        this.setState({
            likes: likes 
        })
    }
    render(){
        console.log(this.state.likes)
    return(
        <div>
            <div className='post-header'>
                <img className='thumbnail-pic' src={this.props.post.thumbnailUrl} alt='profile thumbnail' />
                <span className='username'>{this.props.post.username}</span>
            </div>
            <img className='post-img' src={this.props.post.imageUrl} alt='post' />
            
            <div className='comment-section'>
            <div className='icons'>
                <i onClick={this.addLike} className="far fa-heart fa-lg"></i>
                <i className="far fa-comment fa-lg"></i>
                <p className='likes'>{this.state.likes} likes</p>
            </div>
                <CommentSection comments={this.props.post.comments}/>
            </div>
        </div>
    )
}
}

export default Post;