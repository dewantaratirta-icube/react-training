import React from 'react'
import { Link } from "react-router-dom";

const CardComponent = ({body, image, url, id}) => {
  return (
    <Link to={url} key={id}>
        <article >
            <header style={{ backgroundImage: `url( ${image} )` }}>
            </header>
            <p>{body}</p>
        </article>
    </Link>
  )
}

export default CardComponent