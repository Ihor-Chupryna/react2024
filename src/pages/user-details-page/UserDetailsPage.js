import { Outlet, useLoaderData } from "react-router-dom";

import { UserDetails } from "../../components";
import css from './userDetails.module.css';

const UserDetailsPage = () => {
    const {data} = useLoaderData();

    return (
        <div className={css.userDetailPageStyle}>
            <UserDetails user={data}/>
            <Outlet/>
        </div>
    );
};

export { UserDetailsPage };