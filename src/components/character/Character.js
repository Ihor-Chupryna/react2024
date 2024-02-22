import css from './character.module.css';

const Character = ({character}) => {
    const {name, image} = character;

    return (
        <div className={css.characterStyle}>
            <div>{name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export { Character };