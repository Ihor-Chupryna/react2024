import { useEffect, useState } from "react";

import { todosService } from "../../services/todosService";
import { Todo } from "./Todo";
import css from './TodosContainer.module.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll.then(({data}) => setTodos(data))
    }, []);

    return (
        <div className={css.mainTodosStyle}>
            {todos.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};

export { Todos };