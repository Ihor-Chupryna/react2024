import { useEffect, useState } from "react";

import { postService } from "../../../services";
import { Comment } from "../comment/Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentsByPost(postId).then(({data}) => setComments(data))
    }, [postId]);

    return (
        <ul>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </ul>
    );
};

export { Comments };