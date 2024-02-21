import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Context } from "../../hoc";
import { authService, carService } from "../../services";
import { Car } from "./Car";
import css from './carsContainer.module.css'

const Cars = () => {
    const {trigger} = useContext(Context);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data}) => {
            setCars(data.items)
            setPrevNext({prev: data.prev, next: data.next})
        }).catch(()=>{
            authService.deleteToken()
            navigate('/login')
        })
    }, [trigger, query, navigate]);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <>
            <div className={css.carsMainStile}>
                {cars.map(value => <Car key={value.id} car={value}/>)}
            </div>
            <div className={css.pagination}>
                <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
                <button disabled={!prevNext.next} onClick={nextPage}>next</button>
                <h4>page: {query.get('page')}</h4>
            </div>
        </>
    );
};

export { Cars };