import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email : '',
        password : '',
        confirmPassword : '',
        firstName : '',
        lastName : ''
    }

    validatePassword = () => {
        if (this.state.password !== this.state.confirmPassword) {
            document.getElementById("confirmPassword").setCustomValidity("Passwords Don't Match");
        } 
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.validatePassword();
        console.log(this.state);
    }

    handleChange = (e) => {
        document.getElementById("confirmPassword").setCustomValidity("");
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
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
                </form>             
            </div>
        )
    }
}

export default SignUp;
