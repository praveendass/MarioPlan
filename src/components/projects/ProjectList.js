import React from 'react';
import ProjectSummary from '../projects/ProjectSummary';

const ProjectList = ({projects}) => {

    return (
        <div className='project-list section'>
            <ul>         
                {projects && projects.map(project => {
                    return ( <li key = {project.id} ><ProjectSummary project = {project} /></li> )
                })}
            </ul>
        </div>
    )
}

export default ProjectList;