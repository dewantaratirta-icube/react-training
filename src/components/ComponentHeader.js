import React from 'react';
import {Link} from 'react-router-dom';

const ComponentHeader = () => {
  return (
    <nav className='container-fluid'>
        <ul>
            <li className='headerLogo'>
                <Link to="/">
                    DT
                </Link>
            </li>
            <li>
                <Link to="/" className='header-title'>
                    Dewantara Restaurant 🧑‍🍳
                </Link>
            </li>
        </ul>

    </nav>
  )
}

export default ComponentHeader