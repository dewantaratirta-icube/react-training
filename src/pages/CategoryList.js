import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, Route, Router, useParams  } from "react-router-dom";
import CardComponent from '../components/CardComponent';

const FoodList = () => {
    const {id} = useParams();
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
    const [food, setFood] = useState(null);


    const fetchData = async () => {
        let data = await fetch(apiUrl + id);
        let result = await data.json();

        setFood(result.meals);
        console.log(result.meals)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Food from Category {id}</h1>

            <div className='container-fluid' id='food-list'>
                {
                    food ?
                        (
                            food.map(singlefood => (
                                <CardComponent
                                    body={singlefood.strMeal}
                                    image={singlefood.strMealThumb}
                                    url={'/food/' + singlefood.idMeal}
                                    id={singlefood.idMeal}
                                />
                            ))
                        )
                        :
                        <a href="#" aria-busy="true">🐎Generating data, please wait…</a>
                }
            </div>
        </div >
    )
}

export default FoodList