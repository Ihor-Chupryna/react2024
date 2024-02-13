import css from './AlbumsContainer.module.css'
const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div className={css.albumStyle}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export { Album };