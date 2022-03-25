import React from 'react';
import './MealDetails.css'

const MealDetails = (props) => {
    const { children } = props;
    console.log(children);
    return (
        <div className='meal-details'>
            <div>
                <img src={children[1].image} alt="" />
                <p><strong>{children[1].title.slice(0, 16)}</strong></p>
            </div>
            <div>
                <p>Time: {children[1].readyInMinutes}min</p>
                <p>Serving: {children[1].servings}</p>
            </div>
        </div>
    );
};

export default MealDetails;