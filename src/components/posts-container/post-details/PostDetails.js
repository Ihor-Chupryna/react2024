import css from './postDetails.module.css';

const PostDetails = ({postDetails}) => {
    const {id, title, body} = postDetails

    return (
        <div className={css.postDetailsStyle}>
            <h3>Post Details:</h3>
            <div><span>id:</span> {id}</div>
            <div><span>title:</span> {title}</div>
            <div><span>body:</span> {body}</div>
        </div>
    );
};

export { PostDetails };