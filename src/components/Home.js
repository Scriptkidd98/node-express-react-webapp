import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const[exercises, setExercises] = useState([])
  const readData = async () => {
    try{
      await axios.get('http://localhost:5000/exercises/')
      .then(res => setExercises(res.data))
      .catch(err => console.log(err))
    } catch(err) {
      console.log(err)
    }
  }

  const deleteExercise = async (id) => {
    try{
      await axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    readData()
  },[])
  return (
    <div>
        <Navbar/>
        
        <div className='container' style={{marginTop: '50px', paddingBottom: '50px'}}>
          {exercises.map(exercise => {
            const dateString = exercise.date;
            const date = new Date(dateString); 
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const day = date.getDate().toString().padStart(2, "0"); 
            const formattedDate = `${day}-${month}-${year}`;
            return(
              <div className='each-exercise' key={exercise._id}>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-g col-xs-6'>
                    <p className='description'>{exercise.description}</p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-g col-xs-6'>
                    <button style={{float: 'right', fontSize: 'smaller', color: 'grey', border: 'none'}} onClick={() => {deleteExercise(exercise._id); window.location = '/'}}>Remove</button>
                  </div>
                </div>
                <p style={{color: 'grey'}}>{exercise.duration} mins</p>
                <p style={{color: 'grey'}}>{formattedDate}</p>
                <p style={{color: 'grey'}}>{exercise.username}</p>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default Home