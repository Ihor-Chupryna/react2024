import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { postService } from "../../services/postServise";
import css from './PostPage.module.css'

const PostPage = () => {
    const [post, setPost] = useState(null);
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postService.getById(postId).then(({data})=> setPost(data))
    }, [postId]);

    return (
        <div className={css.postStyle}>
            {post && (<div>
                <div>id :{post.id}</div>
                <div>title: {post.title} </div>
                <div>body: {post.body}</div>
            </div>)}
        </div>
    );
};

export { PostPage };