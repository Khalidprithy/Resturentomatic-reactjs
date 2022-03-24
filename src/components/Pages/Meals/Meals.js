import React from 'react';

const Meals = ({ random }) => {
    const { image, title, summary } = random;
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{summary}</p>
        </div>
    );
};

export default Meals;