import React, {useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const CreateUser = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }
    const createUser = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        }
        console.log(user)
        try {
            await axios.post('http://localhost:5000/users/add/', user)
            .then(res => {console.log(res.data); alert('User added!')})
            .catch(err => console.log(err))
        } catch(err) {
            console.log(err)
        }
    }
  return (
    <div>
        <Navbar/>
        <h5 className='create-heading'>Create New User</h5>
        <div className='form-div'>
            <div style={{paddingLeft: '20px'}}>
                <form onSubmit={createUser}>
                    <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Username:</p>
                    <input value={username} onChange={event => changeUsername(event)} type='text' required className='username-input'></input>

                    <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Password:</p>
                    <input value={password} onChange={event => changePassword(event)} type='text' required className='username-input'></input>

                    <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Confirm password:</p>
                    <input value={confirmPassword} onChange={event => changeConfirmPassword(event)} type='text' required className='username-input'></input>

                    <button type='submit' className='action-button btn btn-primary'>Create User</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateUser