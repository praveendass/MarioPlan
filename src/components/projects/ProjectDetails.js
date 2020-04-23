
import React from 'react';

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className='project-details container section'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title-{id}</span>
                    <p>Aliquip commodo nisi veniam ullamco qui consectetur ad cillum fugiat ad. Deserunt adipisicing tempor commodo deserunt adipisicing ad eu aliquip ad consequat consequat fugiat. In nisi nulla exercitation et in incididunt nostrud mollit. Consequat exercitation laborum sint dolor. Enim excepteur incididunt do fugiat. Non ut eu sunt esse commodo laborum nisi magna fugiat quis.</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Net Ninja</div>
                    <div>23rd April, 3pm</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
