import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text-text-darken-3">
        <span className="card-title blue-text text-darken-1">
          {project.title}
        </span>
        <p className="grey-text text-darken-3">
          <b>
            Posted by {project.authorFirstName} {project.authorLastName}
          </b>
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
