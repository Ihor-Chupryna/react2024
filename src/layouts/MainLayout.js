import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header";
import css from './MainStyle.module.css'

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className={css.mainStyle}>
                <Outlet/>
            </div>
        </div>
    );
};

export { MainLayout };