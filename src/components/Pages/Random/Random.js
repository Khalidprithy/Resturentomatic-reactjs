import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Random.css'

const Random = () => {
    const [randoms, setRandoms] = useState([]);

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

    return (
        <div className='random'>
            {
                randoms.map(random => <Meals
                    key={random.id}
                    random={random}
                ></Meals>)
            }

        </div>
    );
};

export default Random;