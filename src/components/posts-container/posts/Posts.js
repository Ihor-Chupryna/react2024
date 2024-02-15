import { useEffect, useState } from "react";

import { postService } from "../../../services";
import { Post } from "../post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPostsByUser(userId).then(({data}) => setPosts(data))
    }, [userId]);

    return (
        <div>
            <h3>Posts:</h3>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export { Posts };