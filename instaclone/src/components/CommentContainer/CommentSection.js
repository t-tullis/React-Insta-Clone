import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

import './CommentContainer.css';

// ===================== STYLED COMPONETS ===================== 
const CommentForm = styled.form`
`;

const CommentInput = styled.input`
    width: 90%;
    padding: 4% 2%;
    border: none;
    border-top: 1px solid lightgrey;
    font-size: .8rem;
    margin-top: 2%;
    margin-left: 3%;
`;
// =========================================================== 


class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    handleComment = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = (e,i) =>{
        e.preventDefault();
        const newComment = { 
            id: i,
            username: 'tullis_',
            text: this.state.comment, 
        };
        this.setState({
            comments: [...this.state.comments, newComment]
        });
    }

    sumbitComment = (e) =>{
        this.setState({
            comment:''
        })
        this.addComment(e, this.state.comment)
    }

    render(){
        return(
            <div>
                {this.state.comments.map((comment, i) =>{
                    return(
                            <Comment key={i} comment ={comment} />
                    )
                })}
                <div>
                    <CommentForm onSubmit={this.sumbitComment}>
                    <CommentInput type='text'
                        value={this.state.comment}
                        name='comment'
                        placeholder = 'Add a comment...' 
                        onChange={this.handleComment}
                    />
                    </CommentForm>
                </div>
            </div>
        )
    }
}

export default CommentSection; 