import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { postService } from "../../services/postServise";
import css from './PostPage.module.css'
import { Post } from "../../components/Post/Post";

const PostPage = () => {
    const [post, setPost] = useState(null);
    const {state:{postId}} = useLocation();

    useEffect(() => {
        postService.getById(postId).then(({data})=> setPost(data))
    }, [postId]);

    return (
        <div className={css.postStyle}>
            {post && <Post post={post}/>}
        </div>
    );
};

export { PostPage };