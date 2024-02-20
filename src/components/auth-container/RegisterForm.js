import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { joiResolver } from "@hookform/resolvers/joi";

import { authService } from "../../services";
import { registerValidator } from "../../validators";
import css from './auth.module.css';

const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm(
        {mode: "all", resolver: joiResolver(registerValidator)});
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const save = async (data) => {
        try {
            await authService.register(data)
            navigate('/login')
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)} className={css.authFormStyle}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <div>{errors.username.message}</div>}
                <input type="text" placeholder={'password'}{...register('password')}/>
                {errors.password && <div>{errors.password.message}</div>}
                <input type="text" placeholder={'Confirm password'}{...register('rePassword')}/>
                {errors.rePassword && <div>{errors.rePassword.message}</div>}
                <button disabled={!isValid}>register</button>
            </form>
            {error && <div className={css.error}>Username already exist</div>}
        </div>
    );
};

export { RegisterForm };