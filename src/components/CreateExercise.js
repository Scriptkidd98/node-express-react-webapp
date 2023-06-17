import React, {useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const CreateExercise = () => {
    const[username, setUsername] = useState('');
    const[duration, setDuration] = useState('');
    const[description, setDescription] = useState('');
    const[date, setDate] = useState('');

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changeDuration = (event) => {
        setDuration(event.target.value)
    }
    const changeDescription = (event) => {
        setDescription(event.target.value)
    }
    const createExercise = async (event) => {
        event.preventDefault();
        const exercise = {
            username: username,
            duration: duration,
            description: description,
            date: date
        }
        try {
            await axios.post('http://localhost:5000/exercises/add/', exercise)
            .then(res => alert('Exercise added!'))
            .catch(err => console.log(err))
        } catch(err) {
            console.log(err)
        }
        setUsername('')
        setDuration('')
        setDescription('')
        setDate('')
    }
  return (
    <div>
        <Navbar/>
        <div>
            <h5 className='create-heading'>Create New Exercise</h5>
            <div className='form-div'>
                <div style={{paddingLeft: '20px'}}>
                    <form onSubmit={createExercise}>
                        <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Username:</p>
                        <input value={username} onChange={event => changeUsername(event)} type='text'  className='username-input'></input>

                        <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Duration (in minutes):</p>
                        <input value={duration} onChange={event => changeDuration(event)} type='text'  className='username-input'></input>

                        <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Description:</p>
                        <textarea value={description} onChange={event => changeDescription(event)} type='text'  className='username-input'></textarea>

                        <p style={{marginBottom: '10px', marginTop: '20px', fontSize: 'smaller'}}>Date:</p>
                        <input type='date'  value={date} className='username-input' onChange={event => setDate(event.target.value)}></input>

                        <button type='submit' className='action-button btn btn-primary'>Create Exercise</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateExercise