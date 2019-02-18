import React from 'react';
import PropTypes from 'prop-types';

import './commentSection.css'

const Comment = (props) => {
    return(
            <div className = "post-card">
                <h4 className='comment'>{props.comment.username}</h4>
                <p>{props.comment.text}</p>

            </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };


export default Comment;