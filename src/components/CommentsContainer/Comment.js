import { useNavigate } from "react-router-dom";

import css from './CommentsContainer.module.css'

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    const navigate = useNavigate();

    return (
        <div className={css.commentStyle}>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('post', {state: {postId}})}>show post</button>
        </div>
    );
};

export { Comment };