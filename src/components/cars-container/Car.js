import css from './carsContainer.module.css';

const Car = ({car}) => {
    const {brand, price, year} = car
    return (
        <div className={css.carStyle}>
            <p><span>brand:</span> {brand}</p>
            <p><span>price:</span> {price}</p>
            <p><span>year:</span> {year}</p>
        </div>
    );
};

export { Car };