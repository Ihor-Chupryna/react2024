import { Outlet } from "react-router-dom";

import { CarForm } from "../components";

const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
        </div>
    );
};

export { MainLayout };