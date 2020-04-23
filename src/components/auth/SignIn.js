import React, { Component } from 'react'

class SignIn extends Component {

    state = {
        email : '',
        password : ''
    }

    handleSumbit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
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
                </form>             
            </div>
        )
    }
}

export default SignIn
