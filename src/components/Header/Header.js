import { NavLink } from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.headerStyle}>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/todos'}>Todos</NavLink>
        </div>
    );
};

export { Header };