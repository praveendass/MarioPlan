import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'

const ProjectSummary = ({project}) => {
    //const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const createdDate = moment(project.createdAt.toDate()).calendar();
    return (
        <Link to={"/project/"+project.id}>
            <div className='card z-depth-0 project-summary' >
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'>{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className='grey-text'>{createdDate}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProjectSummary;
