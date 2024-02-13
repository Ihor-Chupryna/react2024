import { useEffect, useState } from "react";

import { albumsService } from "../../services/albumsService";
import { Album } from "./Album";
import css from './AlbumsContainer.module.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll.then(({data}) => setAlbums(data))
    }, []);

    return (
        <div className={css.mainAlbumsStyle}>
            {albums.map(value => <Album key={value.id} album={value}/>)}
        </div>
    );
};

export { Albums };