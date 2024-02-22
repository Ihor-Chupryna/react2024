import { useEffect, useState } from "react";

import { Episodes } from "../../components";
import { episodeService } from "../../services";
import { usePageQuery } from "../../hook";
import css from './episode.module.css';

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const {page, prevPage, nextPage} = usePageQuery();
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})

        })
    }, [page]);

    return (
        <div>
            <Episodes episodes={episodes}/>
            <div className={css.pagination}>
                <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
                {page}
                <button disabled={!prevNext.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export { EpisodesPage };