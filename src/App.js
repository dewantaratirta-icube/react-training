import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ComponentHeader from './components/ComponentHeader';
import CategoryList from './pages/CategoryList';
import FoodPage from './pages/FoodPage';
import IndexPage from './pages/IndexPage';

const App = () => {
    return (
        <div>
            <ComponentHeader />

            <div className="container">
                <main>
                    <Routes >
                        <Route path="/" element={<IndexPage />} />
                        <Route
                        path="/category/:id"
                        element={<CategoryList/>} 
                        />
                        <Route
                        path="/food/:id"
                        element={<FoodPage/>} 
                        />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default App