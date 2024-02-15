import css from './comment.module.css'

const Comment = ({comment}) => {
    const {name} = comment;

    return (
        <li className={css.commentStyle}>
            {name}
        </li>
    );
};

export { Comment };