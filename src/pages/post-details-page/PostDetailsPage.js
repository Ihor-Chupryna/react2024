import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { postService } from "../../services";
import { Comments, PostDetails } from "../../components";


const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {state} = useLocation();
    const {postId} = useParams();

    useEffect(() => {
        if (state?.post) {
            setPostDetails(state.post)
        } else {
            postService.getPostById(postId).then(({data}) => setPostDetails(data))
        }
    }, [postId, state]);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            <h3>Comments:</h3>
            <Comments postId={postId}/>
        </div>
    );
};

export { PostDetailsPage };