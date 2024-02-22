import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../hoc";
import css from './episodes.module.css';

const Episode = ({episodeRaM}) => {

    const {name, air_date, episode, characters} = episodeRaM;
    const navigate = useNavigate();
    const [, setNameEpisode] = useContext(Context);

    const onCharacters = () => {
        const ids = characters.map(value => value.split('/').pop());
        setNameEpisode(name)
        navigate(`characters/${ids}`)
    };

    return (
        <div className={css.episodeStyle} onClick={onCharacters}>
            <div><span>name:</span> {name}</div>
            <div><span>date:</span> {air_date}</div>
            <div><span>episode:</span> {episode}</div>
        </div>
    );
};
export { Episode };