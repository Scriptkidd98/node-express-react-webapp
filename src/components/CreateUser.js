import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CreateUser = () => {
    const[username, setUsername] = useState('');

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const readData = async () => {
        try {
            await axios.get('http://localhost:5000/users/')
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        readData()
        console.log('User page')
    },[]) 

    const createUser = async (event) => {
        event.preventDefault(); 
        const user = {
            username: username
        }
        console.log(user)
        try {
            await axios.post('http://localhost:5000/users/add/', null, {params: user})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        } catch(err) {
            console.log(err)
        }
    }
  return (
    <div>CreateUser
        <form onSubmit={() => {createUser()}}>
            <input value={username} onChange={event => changeUsername(event)}></input>
            <button type='submit'>Create</button>
        </form>
        <p>What is going on</p>
    </div>
  )
}

export default CreateUser