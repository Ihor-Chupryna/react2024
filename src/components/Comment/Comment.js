import React from 'react';

const Comment = ({comments: {name, postId, email, body}}) => {
    return (
        <div>
            <div>name: {name}</div>
            <div>postId: {postId}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export { Comment };