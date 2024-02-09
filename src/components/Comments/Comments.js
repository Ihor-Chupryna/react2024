import React, { useEffect, useState } from 'react';

import { commentService } from "../../services/commentService";
import { Comment } from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {comments.map(value => <Comment key={value.id} comments={value}/>)}
        </div>
    );
};

export { Comments };