import React, { Component } from 'react'
import { signUpAction, clearAuthErrorAction} from '../../store/actions/authActions';
import { connect } from 'react-redux';

class SignUp extends Component {

    state = {
        email : '',
        password : '',
        confirmPassword : '',
        firstName : '',
        lastName : ''
    }

    componentDidMount = () => {
        this.props.clearAuthError();
    }

    validatePassword = () => {
        if (this.state.password !== this.state.confirmPassword) {
            document.getElementById("confirmPassword").setCustomValidity("Passwords Don't Match");
        } 
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.validatePassword();
        this.props.signUp(this.state);
    }

    handleChange = (e) => {
        document.getElementById("confirmPassword").setCustomValidity("");
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    render() {
        const authError = this.props.authError;

        return (
            <div className='container'>
                <form onSubmit={this.handleSumbit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' required onChange={this.handleChange} value={this.state.email} ></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' required onChange={this.handleChange} value={this.state.password} ></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type='password' id='confirmPassword' required onChange={this.handleChange} value={this.state.confirmPassword} ></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' required onChange={this.handleChange} value={this.state.firstName} ></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' required onChange={this.handleChange} value={this.state.lastName} ></input>
                    </div>
                    <button type='submit' className='btn pink ligthen-1 z-depth-0' >Sign up</button>
                        { authError ? (<p>{authError}</p>) : null}
                    <div className='red-text center'></div>
                </form>             
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => { dispatch(signUpAction(newUser)) },
        clearAuthError: () => {dispatch(clearAuthErrorAction())}
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
