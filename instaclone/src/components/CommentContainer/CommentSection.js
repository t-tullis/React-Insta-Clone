import React from 'react';
import Comment from './Comment';

import './CommentContainer.css'

class CommentSection extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: props.comments
        };
    }
    render(){
        console.log(this.state.comments)
        return(
            <div>
                {this.state.comments.map((comment, i) =>{
                    return(
                        <div key={i}>
                            <Comment comment ={comment} />
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
        )
    }
}

export default CommentSection; 