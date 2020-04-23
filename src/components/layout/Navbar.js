import React from 'react';
import {Link} from 'react-router-dom';
import MushroomIcon from '../../media/mushroom_icon.png';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
const Navbar = () => {
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'><img src={MushroomIcon} alt='brand logo' /> MarioPlan</Link>
                <SignedoutLinks />
                <SignedinLinks />
            </div>
        </nav>
    )
}

export default Navbar;


