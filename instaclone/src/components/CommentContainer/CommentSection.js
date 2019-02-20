import React from 'react';
import Comment from './Comment';

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
                    <Comment key={i} comment ={comment} />
                    )
                })}
            </div>
        )
    }
}

export default CommentSection; 