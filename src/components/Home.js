import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const[exercises, setExercises] = useState([])
  const readData = async () => {
    try{
      await axios.get('http://localhost:5000/exercises/')
      .then(res => {console.log(res.data); setExercises(res.data)})
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
            return(
              <div className='each-exercise' key={exercise.id}>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-g col-xs-6'>
                    <p className='description'>{exercise.description}</p>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-g col-xs-6'>
                    <span style={{float: 'right', fontSize: 'smaller', color: 'grey'}}>Remove</span>
                  </div>
                </div>
                <p style={{color: 'grey'}}>{exercise.duration} mins</p>
                <p style={{color: 'grey'}}>{exercise.date}</p>
                <p style={{color: 'grey'}}>{exercise.username}</p>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default Home