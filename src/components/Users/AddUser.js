import React, {useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
//import classes1 from './Button.module.css';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props)  => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler=(event) =>{
        event.preventDefault();
        console.log(enteredUsername,enteredAge);
        if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){
            setError({
                title: 'Pogresan unos...',
                message: 'Molimo vas unesite odgovarajuce ime i godine'
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                title: 'Pogresan unos godina...',
                message: 'Molimo vas unesite odgovarajuce godine'
            }); 
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const ErrorHandler = () => {
        setError(null);
    }

    return(
       <div>
        {error &&<ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
        <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="username ">Username</label>
    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
    <label htmlFor="age ">Age (Years)</label>
    <input id="age" type="number"value={enteredAge} onChange={ageChangeHandler}/>
    <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
    );
};

export default AddUser;