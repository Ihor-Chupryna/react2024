import { User } from "../user/User";
import css from './users.module.css';

const Users = ({users}) => {
    return (
        <div className={css.usersStyle}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export { Users };