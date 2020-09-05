import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ex
            perferendis omnis officiis nihil, sapiente aliquam esse dolor,
            totam, consequuntur voluptatem! Ipsam ducimus incidunt ullam
            exercitationem omnis neque quibusdam repellat!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Hendra Agil</div>
          <div>28 August, 4pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
