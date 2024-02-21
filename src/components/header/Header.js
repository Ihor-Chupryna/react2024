import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import css from './header.module.css';
import { authService } from "../../services";

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const token = authService.getToken();

    useEffect(() => {
        if (!token) {
            setUser(null)

        } else {
            authService.aboutMe().then(({data}) => setUser(data)).catch(()=> {
                setUser(null)
                }
            )
        }

    }, [token]);

    const logout = () => {
        authService.deleteToken()
        navigate('/login')
    }

    return (
        <div className={css.headerStyle}>
            <h1>Cars</h1>
            {
                !user ?
                    (<div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>)
                    :
                    (<div className={css.logoutStyle}>
                        <p>{user.username}</p>
                        <button onClick={logout}>Logout</button>
                    </div>)
            }
        </div>
    );
};

export { Header };