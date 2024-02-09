import React from 'react';
import { useForm } from "react-hook-form";

import { commentService } from "../../services/commentService";

const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const create = (data) => {
        commentService.create(data).then(({data}) => console.log(data))

    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>create</button>
        </form>
    );
};

export { CommentForm };