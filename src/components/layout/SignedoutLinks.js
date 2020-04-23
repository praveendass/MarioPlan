import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedoutLinks = () => {
    return (
        <ul className='right hide-on-med-and-down'>
            <li><NavLink to='/signin'>Sign in</NavLink></li>
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li></li>
        </ul>
    )

}

export default SignedoutLinks;