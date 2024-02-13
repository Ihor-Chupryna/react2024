import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { CommentsPage } from "./pages/CommentsPage/CommentsPage";
import { TodosPage } from "./pages/TodosPage/TodosPage";
import { AlbumsPage } from "./pages/AlbumsPage/AlbumsPage";
import { PostPage } from "./pages/PostPage/PostPage";


const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<NotFoundPage/>, children:[
             {
                index:true, element:<Navigate to={'comments'}/>
            },
            {
                path:'comments', element:<CommentsPage/>, children:[
                    {path: 'post', element:<PostPage/>}
                ]
            },
            {
                path:'todos', element:<TodosPage/>
            },
            {
                path:'albums', element:<AlbumsPage/>
            }
        ]
    }


]);

export { router }