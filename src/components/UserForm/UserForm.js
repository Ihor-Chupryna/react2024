import React from 'react';
import { useForm } from "react-hook-form";

import { userService } from "../../services/userService";

const UserForm = () => {
    const {reset, register, handleSubmit} = useForm();

    const create = (data) => {
        userService.create(data).then(({data}) => console.log(data))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>create</button>
        </form>
    );
};

export { UserForm };