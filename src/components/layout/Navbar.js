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
        <nav className='nav-extended grey darken-3'>
            <div className='nav-wrapper'>
                <div className='container'>
                    <Link to='/' className='brand-logo'><img src={MushroomIcon} alt='brand logo' /> MarioPlan</Link>
                    <div className='right hide-on-med-and-down'>
                        { isAuthenticated ? <SignedinLinks /> : <SignedoutLinks /> }
                    </div>
                </div>
            </div>
            {/* extended nav */}
            <div className="nav-wrapper hide-on-large-only">
                <div className='container'>
                    <div className="right">
                        { isAuthenticated ? <SignedinLinks /> : <SignedoutLinks /> }
                    </div>
                </div>
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


