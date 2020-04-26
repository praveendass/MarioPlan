import React, { Component } from 'react'
import {signInAction, clearAuthErrorAction} from '../../store/actions/authActions';
import { connect } from 'react-redux';

class SignIn extends Component {

    state = {
        email : '',
        password : ''
    }

    componentDidMount = () => {
        this.props.clearAuthError();
    }
    
    handleSumbit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {

        const authError = this.props.authError;

        return (
            <div className='container'>
                <form onSubmit={this.handleSumbit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} value={this.state.email} ></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} value={this.state.password} ></input>
                    </div>
                    <button type='submit' className='btn pink ligthen-1 z-depth-0' >Login</button>
                    <div className="red-text center">
                        { authError? <p>{authError}</p> : null }
                    </div>
                </form>             
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (credentials) => { dispatch(signInAction(credentials)) },
        clearAuthError: () => {dispatch(clearAuthErrorAction())}
    }
}


const mapStatetoProps = (state) => {
    //console.log(state);
    return {
        authError : state.auth.authError
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(SignIn);
