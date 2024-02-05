import React, { useEffect, useState } from 'react';

import { postService } from "../../servises/postService";
import { Post } from "../Post/Post";
import { PostDetails } from "../PostDetails/PostDetails";
import css from './posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setCurrentPost(post)
    }

    return (
        <div>
            <h2>POSTS</h2>
            <div className={css.postLists}>{posts.map(value => <Post key={value.id} post={value} getCurrentPost={getCurrentPost}/>)}</div>
            {currentPost && <PostDetails post={currentPost}/>}
        </div>
    );
}

export { Posts };