import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/AnonMsgBoard.jpg';
import StockPriceImg from './Images/StockPriceChecker.jpg';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Reports</h3>
          <p className="separator" />
        
        </div>
        <div className="projects-wrapper">
          <Project
            title="State-wise Murder Count over United States"
            img={MsgBoardImg}
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
            title="Stock Price Checker."
            img={StockPriceImg}
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
            title="Anonymous Message Board."
            img={MsgBoardImg}
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
            img={MsgBoardImg}
            graphType="4"
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
          <Project
            title="Analysis Report: How to get Away with Murder."
            img={MsgBoardImg}
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
