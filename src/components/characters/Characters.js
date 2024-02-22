import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../hoc";
import { Character } from "../character/Character";
import css from './characters.module.css';

const Characters = ({characters}) => {
    const navigate = useNavigate();
    const [, setNameEpisode] = useContext(Context);

    const back = () => {
        setNameEpisode(null);
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back} className={css.backButton}>Back</button>
            <div className={css.charactersMainStyle}>
                {characters.map(value => <Character key={value.id} character={value}/>)}
            </div>
        </div>
    );
};

export { Characters };