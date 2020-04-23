import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedinLink = () => {
    return (
        <ul className='right hide-on-med-and-down'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )

}

export default SignedinLink;