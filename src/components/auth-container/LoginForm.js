import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../../services";
import css from './auth.module.css';

const LoginForm = () => {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const login = async (data) => {
        try {
            await authService.login(data)
            navigate('/cars')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)} className={css.authFormStyle}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>login</button>
            </form>
            {error && <div className={css.error}>Username or password incorrect</div>}
        </div>
    );
};

export { LoginForm };