import React from 'react';
import Comment from './Comment';

import './CommentContainer.css'

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
                    <form className= 'comment-input' onSubmit={this.sumbitComment}>
                    <input type='text'
                    value={this.state.comment}
                    name='comment'
                    placeholder = 'Add a comment...' 
                    onChange={this.handleComment}
                    />
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection; 