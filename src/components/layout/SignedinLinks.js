import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../store/actions/authActions';


const SignedinLink = ({profile, signOut}) => {
    return (
        <ul>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick = { signOut } href = '/signin'>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{ profile.initials }</NavLink></li>
        </ul>
    )

}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => { dispatch(signOutAction()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedinLink);