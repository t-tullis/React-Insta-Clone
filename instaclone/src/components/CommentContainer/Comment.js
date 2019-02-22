import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './CommentContainer.css'
import { string } from 'postcss-selector-parser';

// ===================== STYLED COMPONETS ===================== 
const FullComment = styled.div`
    padding: 1% 3%;
    font-size: .9rem; 
`;

const CommentTxt = styled.span`
    margin-left: 1%
`;

const CommentUsr = styled.span`
`;
// =========================================================== 

const Comment = (props) =>{
    return(
        <FullComment>
            <CommentUsr><strong>{props.comment.username}</strong></CommentUsr>
            <CommentTxt>{props.comment.text}</CommentTxt>
        </FullComment>
    )
}

Comment.propTypes ={
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;