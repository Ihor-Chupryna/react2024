import { useNavigate } from "react-router-dom";

import css from './post.module.css';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div className={css.postStyle}>
            <div>-{title}</div>
            <button onClick={() => navigate(id.toString(), {state: {post}})}>post details</button>
        </div>
    );
};

export { Post };