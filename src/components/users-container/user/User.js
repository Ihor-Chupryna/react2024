import { useNavigate } from "react-router-dom";

import css from './user.module.css';

const User = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div className={css.userStyle}>
            <h2>{id}) {name}</h2>
            <button onClick={() => navigate(id.toString())}>user details</button>
        </div>
    );
};

export { User };