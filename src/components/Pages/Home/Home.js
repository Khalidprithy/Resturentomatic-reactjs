import React from 'react';
import './Home.css'
import Random from '../Random/Random';
import Vegetarian from '../Vegetarian/Vegetarian';

const Home = () => {
    return (
        <div className='home'>
            <h1 className='popular-meal'>Popular Meal</h1>
            <Random></Random>
            <Vegetarian></Vegetarian>
        </div>
    );
};

export default Home;