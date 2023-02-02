import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../images/biryani.jpg';
import './Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1> BIRYANI LIFE </h1>
            <h5>Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot.</h5>
            <Link to='/menu'>
               <button> Order Now </button>
            </Link>
        </div>
    </div>
  )
}

export default Home;