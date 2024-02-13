import css from './TodosContainer.module.css'
const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <div className={css.todoStyle}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export { Todo };