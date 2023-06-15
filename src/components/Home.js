import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>Home
        <Link to='/user'>Go to user page</Link>
    </div>
  )
}

export default Home