import { Episode } from "../episode/Episode";
import css from './episodes.module.css';

const Episodes = ({episodes}) => {
    return (
        <div className={css.episodesMainStyle}>
            {episodes.map(value => <Episode key={value.id} episodeRaM={value}/>)}
        </div>
    );
};

export { Episodes };