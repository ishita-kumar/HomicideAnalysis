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
            State-wise Murder Count over United States spanned over the years 1980-2014. To highlight the states with highest and lowest homicide rate. Further divided into Slaughter by Neglience and Murder or Manslaughter.
            </small>
            
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
            Race and Crime seem to be a perpetual public controversial topic in America. According to the Federal Bureau of Investigation Uniform Crime Report database, 48% of all hate crime offenders were motivated by the victim's race.
            </small>
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
            Shooting has long been the most common cause of death in homicide cases worldwide. Years between 1990 to 1994 peaked in gun violence and nearly 30 % percent of gun violence related homicide went unsolved.
            </small>
            
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
            Focuses on analysing the trends in murders that have gone unsolved. Perpretators Age, race and sex seem to have to most influence on the murders being unsolved
            </small>
            
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
