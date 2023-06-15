import React, {useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const CreateUser = () => {
    const[username, setUsername] = useState('');

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const createUser = async (event) => {
        const user = {
            username: username
        }
        console.log(user)
        try {
            await axios.post('http://localhost:5000/users/add/', user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        } catch(err) {
            console.log(err)
        }
        event.preventDefault();
    }
  return (
    <div>
        <Navbar/>
        <h5 style={{padding: '50px 0px 20px 20px'}}>Create New User</h5>
        <div style={{paddingLeft: '20px'}}>
            <form onSubmit={() => {createUser()}}>
                <label htmlFor='username'>Username:</label>
                <input value={username} onChange={event => changeUsername(event)} name='username' type='text' required style={{marginLeft: '10px'}}></input>
                <button type='submit' style={{marginLeft: '10px'}} className='' onClick={() => {createUser()}}>Create</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser