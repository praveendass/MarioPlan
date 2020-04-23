import React, { Component } from 'react'

class CreateProject extends Component {

    state = {
        topic : '',
        content : ''
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
                    <h5 className='grey-text text-darken-3'>Create new project</h5>
                    <div className='input-field'>
                        <label htmlFor='topic'>Topic</label>
                        <input type='text' id='topic' onChange={this.handleChange} value={this.state.topic} ></input>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Project Content</label>
                        <input type='text' id='content' onChange={this.handleChange} value={this.state.content} ></input>
                    </div>
                    <button type='submit' className='btn pink ligthen-1 z-depth-0' >Create Project</button>
                </form>             
            </div>
        )
    }
}

export default CreateProject;