import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';
import { router } from "./services/router";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);