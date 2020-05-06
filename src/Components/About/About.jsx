import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="desc full">
            <h4 className="subtitle">Homicide Analysis</h4>
            <p>
            After World War II, crime rates increased in the United States, peaking from the 1980s to the early-1990s. Violent crime nearly quadrupled between 1960 and peaked around 1991. Since the 1990s, however, contrary to popular belief, crime in the United States has declined steadily. 
            </p>
            <p>
            We provide a visually aided analysis of this with homicide statistics obtained between the years 1980 - 2014 showing a state - wise crime rate over these years and some deeper investigation into race - based crime and gun violence.
            </p>
          </div>
         
          {/* <div className="desc">
            <h4 className="subtitle">Visualizations </h4>
            <p>
             ALLALALLALALA
            </p>
            <p>
              BLALALAL
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle"> Analysis</h4>
            <p>
           ANNANAN
            </p>
            <p>
             ANNAN
            </p>
          </div> */}
        </article>
      </div>
    </section>
  );
};

export default About;
