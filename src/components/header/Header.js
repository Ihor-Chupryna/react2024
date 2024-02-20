import { NavLink } from "react-router-dom";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.headerStyle}>
            <h1>Cars</h1>
            <div>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'register'}>Register</NavLink>
            </div>
        </div>
    );
};

export { Header };