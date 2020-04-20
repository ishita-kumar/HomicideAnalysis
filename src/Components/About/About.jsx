import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About Project</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">Homicide Analysis</h4>
            <p>
              I am a web developer and UX designer based in the beautiful west coast of Spain,
              Galicia.
            </p>
           
          </div>
         
          <div className="desc">
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
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
