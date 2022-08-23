import React from 'react'
import CategoryComponent from '../components/CategoryComponent'

const IndexPage = () => {
    return (
        <div>
            <h1 className='animate__animated animate__fadeInDown'>🐎 Hello, welcome to my first React App</h1>
            <h4>
                <span className='animate__animated animate__fadeInDown animate__delay-1s'>🔥We serve the best dishes around the world.</span>
                <br />
                <span className='animate__animated animate__fadeInDown animate__delay-2s'>🔥 Please pick one of your favorite category below :</span>
            </h4>
            <CategoryComponent />
        </div>
    )
}

export default IndexPage