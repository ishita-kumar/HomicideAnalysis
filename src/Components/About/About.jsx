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
              The Americas continue to report high homicide rates. Young men are especially at risk, with a homicide
              rate for men aged 18 to 19 estimated at 46 per 100,000 – far higher than the risk faced by their peers in
              other regions. Firearms are also involved far more often in homicides in the Americas than in other parts
              of the world. Criminal activity is responsible for many more deaths worldwide than armed conflict and terrorism
              combined. . By bringing together the available data, the research and analysis contained in the study can be used to learn, understand and strengthen prevention.
              After World War II, crime rates increased in the United States, peaking from the 1980s to the early-1990s. Violent crime nearly quadrupled between 1960 and peaked around 1991. Since the 1990s, however, contrary to popular belief, crime in the United States has declined steadily. 
            </p>
            <p>This study offers particular insights into the </p>
            <p>The study also provides analysis into Murders that have gone unknown</p>
          </div>

          <div className="desc">
            
          
            <p>
            A visually aided analysis is provided with homicide statistics obtained between the years 1980 - 2014 showing a state - wise crime rate over these years and some deeper investigation into race - based crime, gun violence and an analysis of crimes that were solved and unsolved.
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
