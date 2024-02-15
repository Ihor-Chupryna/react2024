import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../components";

import css from './mainLayout.module.css';
const MainLayout = () => {
    return (
        <div className={css.mainStyle}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export { MainLayout };