import React from 'react';
import { Link } from 'react-router-dom'

const Project = props => {


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
           
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
        {/* <Link to="/">    See the Graph</Link>{' '} */}
          <a href={repo} target="_blank" rel="noopener noreferrer">
            See the Graph <i className="fas fa-external-link-alt" />
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Project;
