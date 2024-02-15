import { NavLink } from "react-router-dom";

import css from './footer.module.css';

const Footer = () => {
    return (
        <div className={css.footerStyle}>
            <NavLink to={'https://jsonplaceholder.typicode.com/'}><p>by JSONPlaceholder</p></NavLink>
        </div>
    );
};

export { Footer };