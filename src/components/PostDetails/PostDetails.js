import React from 'react';

import css from './postDatails.module.css'

const PostDetails = ({post}) => {
    const {id, title, body, userId} = post
    return (
        <div className={css.postDetailsStyle}>
            <div>id: {id} </div>
            <div>title: {title} </div>
            <div>body: {body} </div>
            <div>userId: {userId} </div>
        </div>
    );
};

export { PostDetails };