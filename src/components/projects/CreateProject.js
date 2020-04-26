import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addProjectAction } from '../../store/actions/projectActions'


class CreateProject extends Component {

    state = {
        title : '',
        content : ''
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
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
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleChange} value={this.state.title} ></input>
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

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => { dispatch(addProjectAction(project)) }
    }
}


export default connect(null, mapDispatchToProps)(CreateProject);