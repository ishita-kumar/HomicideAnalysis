import React from 'react';
import Project from './Project';
import './Projects.css';
import usMaps from './Images/usmap.jpg';
import race from './Images/race.jpg';
import gun from './Images/gun.jpg';
import howTo from './Images/howto.jpg';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Visualizations</h3>
          <p className="separator" />
        </div>
        <div className="projects-wrapper">
          <Project
            title="State-wise Murder Count over United States"
            img={usMaps}
            graphType="1"
            tech="js css react node"
            link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users read and post anonymous
              messages and replies.
            </p>
          </Project>
          <Project
            title="Crime Rate by Race"
            img={race}
            tech="js node css"
            graphType="2"
            link="https://yagoestevez-stock-price-checker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-stock-price-checker"
          >
            <small>
              Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug.
            </small>
            <p>
              Another full-stack website to check the current value of any requested stock in the
              market.
            </p>
          </Project>
          <Project
            title="Gun-Violence Trends"
            img={gun}
            graphType="3"
            tech="js css react node"
            link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users read and post anonymous
              messages and replies.
            </p>
          </Project>
       
          <Project
            title="Analysis Report: How to get Away with Murder."
            img={howTo}
            graphType="5"
            tech="js css react node"
            link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          >
            <small>
              Analysis Report 
            </small>
            <p>
              This is a full-stack website that I made which lets the users read and post anonymous
              messages and replies.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
