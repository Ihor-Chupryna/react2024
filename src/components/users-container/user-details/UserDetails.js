import { useNavigate } from "react-router-dom";

import css from './userDetails.module.css';

const UserDetails = ({user}) => {
    const navigate = useNavigate();

    const {
        id,
        name,
        username,
        phone,
        website,
        email,
        address: {city, street, suite},
        company: {name: companyName, bs, catchPhrase}
    } = user

    return (
        <div className={css.userDetailsMain}>
            <div className={css.userStyle}>
                <h3>{name}</h3>
                <div><span>username:</span> {username}</div>
                <div><span>phone:</span> {phone}</div>
                <div><span>website:</span> {website}</div>
                <div><span>email:</span> {email}</div>
                <button onClick={() => navigate('posts', {state: {id}})}>post of current user</button>
            </div>
            <div className={css.userStyle}>
                <h3><span>Address:</span></h3>
                <div><span>city:</span> {city}</div>
                <div><span>street:</span> {street}</div>
                <div><span>suite:</span> {suite}</div>
            </div>
            <div className={css.userStyle}>
                <h3>Company:</h3>
                <h4>{companyName}</h4>
                <div><span>catchPhrase:</span> {catchPhrase}</div>
                <div><span>bs:</span> {bs}</div>
            </div>
        </div>
    );
};

export { UserDetails };