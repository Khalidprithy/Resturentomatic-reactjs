import React from 'react';
import './Meals.css'

const Meals = ({ random }) => {
    // console.log(random);
    const { image, title, pricePerServing } = random;
    return (
        <div className='meals'>
            <img src={image} alt="" />
            <div className='meal-info'>
                <h4>{title.slice(0, 40)}</h4>
                <p>Price: {pricePerServing}</p>
            </div>
        </div>
    );
};

export default Meals;