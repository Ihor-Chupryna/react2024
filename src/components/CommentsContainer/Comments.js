import { useEffect, useState } from "react";

import { commentsService } from "../../services/commentsService";
import { Comment } from "./Comment";
import css from './CommentsContainer.module.css'

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll.then(({data}) => setComments(data))
    }, []);

    return (
        <div className={css.mainCommentsStyle}>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export { Comments };