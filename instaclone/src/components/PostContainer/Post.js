import React from 'react';
import CommentSection from '../CommentContainer/CommentSection';
import styled from 'styled-components';
import './PostContainer.css'

// ===================== STYLED COMPONETS ===================== 
const PostImg = styled.img`
    width: 100%;
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 2% 3%;
    border: 1px solid lightgray;
    font-size: .9rem;
    font-weight: bold;
`
const ThumbnailPic = styled.img`
    border-radius: 50%;
    width: 7%;
`
const Username = styled.span`
    margin-left: 3%;
`;

const CommentSectionWrapper = styled.div`
    border: 1px solid lightgray;
    text-align: left;
    margin-bottom: 5%;
    padding-top: 1%; 
    margin-top: -2%;
`;

const Likes = styled.p`
    padding-left: 3%;
    font-size: .9rem;
    font-weight: bold;
`;
// =========================================================== 


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
                <PostHeader>
                    <ThumbnailPic src={this.props.post.thumbnailUrl} alt='profile thumbnail' />
                    <Username>{this.props.post.username}</Username>
                </PostHeader>
                <PostImg src={this.props.post.imageUrl} alt='post' />
            
                <CommentSectionWrapper>
                    <div className='icons'>
                        <i onClick={this.addLike} className="far fa-heart fa-med"></i>
                        <i className="far fa-comment fa-med"></i>
                        <Likes>{this.state.likes} likes</Likes>
                    </div>
                    <CommentSection comments={this.props.post.comments}/>
                </CommentSectionWrapper>
            </div>
        )
    }
}

export default Post;