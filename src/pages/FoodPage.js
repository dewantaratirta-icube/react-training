import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, Route, Router, useParams } from "react-router-dom";
import CardComponent from '../components/CardComponent';


const FoodPage = () => {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

    const fetchData = async () => {
        let data = await fetch(apiUrl + id);
        let result = await data.json();


        if (result.meals.hasOwnProperty('0')) {
            let meals = result.meals[0];
            let ingredients = [];
            let measure = [];

            Object.keys(meals).forEach((value, index) => {
                // check ingredient
                if (value.search('strIngredient') == 0 && meals[value] != '' && meals[value]) {
                    ingredients.push(meals[value]);
                }

                if (value.search('strMeasure') == 0 && meals[value] != '' && meals[value]) {
                    measure.push(meals[value]);
                }
                // console.log(value);
            });
            meals.ingredients = ingredients;
            meals.measure = measure;
            setFood(meals);
            console.log(meals)
            // console.log(meals)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                (food) ?
                    <article id="food-single">
                        <header>
                            <div className='img-container' style={{ backgroundImage: `url( ${food.strMealThumb} )` }}></div>
                            {/* <img src={food.strMealThumb} /> */}
                        </header>
                        <h1 id="title">{food.strMeal}</h1>
                        <p>{food.strInstructions}</p>

                        <div className='etc'>
                            <span>Area: {food.strArea}</span>
                            <span>Category: {food.strCategory}</span>
                        </div>

                        <h5>Ingredients</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Ingredient Name</th>
                                    <th scope="col">Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {food.ingredients.forEach( (v, i) => {
                                    (
                                        <tr>
                                            <td>{ (i+1) }</td>
                                            <td>{food.ingredients[i]}</td>
                                            <td>{food.measure[i]}</td>
                                        </tr>
                                    )
                                } )}
                            </tbody>
                        </table>
                    </article>
                    : <a href="#" aria-busy="true">🐎 Generating data, please wait…</a>
            }
        </div>
    )
}

export default FoodPage