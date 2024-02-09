import './App.css';
import { Users } from "./components/Users/Users";
import { UserForm } from "./components/UserForm/UserForm";

function App() {

    return (
        <div>
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
}

export default App;
