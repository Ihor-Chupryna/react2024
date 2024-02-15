import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import { ErrorPage, HomePage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage } from "./pages";
import { userService } from "./services";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'home'}/>
            },
            {
                path: 'users', element: <UsersPage/>, loader: () => userService.getAll, children: [
                    {
                        path: ':userId', element: <UserDetailsPage/>,
                        loader: ({params: {userId}}) => userService.getById(userId),
                        children: [
                            {
                                path: 'posts', element: <PostsPage/>, children: [
                                    {
                                        path: ':postId', element: <PostDetailsPage/>
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                path: 'home', element: <HomePage/>
            }
        ]
    }
]);

export { router }