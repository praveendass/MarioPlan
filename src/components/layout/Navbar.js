import React from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import MushroomIcon from '../../media/mushroom_icon.png';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { connect } from 'react-redux';
const Navbar = (props) => {

    //console.log(props)
    const isAuthenticated = !props.auth.isEmpty
    const pathname = props.history.location.pathname;
    if (!isAuthenticated) {
        if ((pathname !== '/signin') &&  (pathname !== '/signup')) {
            return (< Redirect to='/signin' />);
        }
    } else {
        if ((pathname === '/signin') || (pathname === '/signup')) {
            return (< Redirect to='/' />);
        }
    }


    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'><img src={MushroomIcon} alt='brand logo' /> MarioPlan</Link>
                { isAuthenticated ? <SignedinLinks /> : <SignedoutLinks /> }    
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

export default withRouter(connect(mapStateToProps)(Navbar));


