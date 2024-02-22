import { useContext } from "react";

import css from './header.module.css';
import { Context } from "../../hoc";

const Header = () => {
    const [nameEpisode,] = useContext(Context);

    return (
        <div className={css.headerStyle}>
            {nameEpisode
                ?
                <h1>{nameEpisode}</h1>
                :
                <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export { Header };