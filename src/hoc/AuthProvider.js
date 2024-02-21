import { Navigate } from "react-router-dom";

import { authService } from "../services";

const AuthProvider = ({children}) => {
    const token = authService.getToken();

    if (token) {
        return children
    }

    return <Navigate to={'/login'}/>


}

export { AuthProvider };