import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Home from './components/Home';
import './components/myStyles.css';
import CreateExercise from './components/CreateExercise';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/user' element={<CreateUser></CreateUser>}></Route>
        <Route path='/create-exercise' element={<CreateExercise></CreateExercise>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
