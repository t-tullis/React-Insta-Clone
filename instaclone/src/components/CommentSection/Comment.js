import React from 'react';
import PropTypes from 'prop-types';

import './commentSection.css'

class Comment extends React.Component{
  constructor(props){
    console.log(props)
    super(props)
    this.state ={
      comment: props.comment
    }
  }

  addNewComment= (e, i) =>{

  }

  render(){
    return(
            <div className = "post-card">
                <h4 className='comment'>{this.state.comment.username}</h4>
                <p>{this.state.comment.text}</p>
            </div>
    )
}
}

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };


export default Comment;