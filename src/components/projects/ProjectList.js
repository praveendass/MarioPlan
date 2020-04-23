import React from 'react';
import {Link} from 'react-router-dom'
import ProjectSummary from '../projects/ProjectSummary';

const ProjectList = () => {
const id= 1;

    return (
        <div className='project-list section'>
            <ul>
                <li><Link to={'/project/'+id} ><ProjectSummary /></Link></li>
                <li><Link to={'/project/'+id} ><ProjectSummary /></Link></li>
                <li><Link to={'/project/'+id} ><ProjectSummary /></Link></li>
                <li><Link to={'/project/'+id} ><ProjectSummary /></Link></li>
            </ul>
        </div>
    )
}

export default ProjectList;