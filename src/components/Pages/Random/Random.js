import React, { useEffect, useState } from 'react';
import MealDetails from '../MealDetails/MealDetails';
import Meals from '../Meals/Meals';
import './Random.css'

const Random = () => {
    const [randoms, setRandoms] = useState([]);
    const [details, setDetails] = useState([])

    useEffect(() => {
        getRandom();

    }, []);
    const getRandom = async () => {
        const check = localStorage.getItem('random');
        if (check) {
            setRandoms(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('random', JSON.stringify(data.recipes));
            setRandoms(data.recipes);
        }
    }

    useEffect(() => {
    }, [])

    const ShowMealDetails = (randoms) => {
        // console.log(randoms);
        const newDetails = [...details, randoms];
        setDetails(newDetails);
    }


    return (
        <div className='meal-container'>
            <div className='random'>
                {
                    randoms.map(random => <Meals
                        key={random.id}
                        random={random}
                        ShowMealDetails={ShowMealDetails}
                    ></Meals>)
                }
            </div>
            <div className='order-container'>
                <div className='order-info'>

                    <h1>Orders</h1>
                    <p>Ordered Items: {details.length}</p>
                </div>
                {
                    details.map(detail =>
                        <MealDetails>
                            detail = {detail}
                        </MealDetails>
                    )
                }
            </div>
        </div>
    );
};

export default Random;