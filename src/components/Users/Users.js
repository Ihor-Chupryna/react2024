import React, { useEffect, useState } from 'react';

import { userService } from "../../services/userService";
import { User } from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export { Users };