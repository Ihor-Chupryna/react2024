import { Outlet, useParams } from "react-router-dom";

import { Posts } from "../../components";
import css from './PostPage.module.css';

const PostsPage = () => {
    const {userId} = useParams();

    return (
        <div className={css.postPageStyle}>
            <Posts userId={userId}/>
            <Outlet/>
        </div>
    );
};

export { PostsPage };