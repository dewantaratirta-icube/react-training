import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CardComponent from './CardComponent';


const CategoryComponent = () => {

    const [categories, setCategory] = useState(null);

    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    const fetchData = async () => {
        let data = await fetch(apiUrl);
        let result = await data.json();

        setCategory(result.categories);
    }


    useEffect(() => {
        setTimeout(()=>{
            fetchData();
        },3000)
    }, []);

    return (
        <div className='container-fluid' id='food-list'>{
            categories ? (
                categories.map(cat => (
                    // <p>{JSON.stringify(cat.strCategoryDescription)}</p>
                    <CardComponent
                        body={cat.strCategory}
                        image={cat.strCategoryThumb}
                        url={'/category/'+ cat.strCategory}
                        id={cat.strCategory}
                    />
                    // cat.strCategoryDescription
                ))
            ) : ''
        }</div>
    )

}

export default CategoryComponent