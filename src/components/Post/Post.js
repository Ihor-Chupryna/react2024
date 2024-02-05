import React from 'react';

import css from './post.module.css'
const Post = ({post, getCurrentPost}) => {
    const {id, title} = post

    return (
        <div style={{display: 'flex', columnGap: '10px'}}>
            <div>{id}) {title}</div>
            <button className={css.buttonStyle} onClick={() => getCurrentPost(post)}>Post-details</button>
        </div>
    );
};

export { Post };