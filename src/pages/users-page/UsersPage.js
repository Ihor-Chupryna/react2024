import { Outlet, useLoaderData } from "react-router-dom";

import { Users } from "../../components";
import css from './userPage.module.css';

const UsersPage = () => {
    const {data} = useLoaderData();

    return (
        <div className={css.userPageStyle}>
            <Users users={data}/>
            <Outlet/>
        </div>
    );
};

export { UsersPage };