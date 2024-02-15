import { NavLink } from "react-router-dom";

import css from './heder.module.css';

const Header = () => {
    return (
        <div className={css.headerStyle}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/home'}>HomePage</NavLink>
        </div>
    );
};

export { Header };