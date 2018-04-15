import React from 'react';
import './Score.css';

const Score = props => (
  <div className="jumbotron text-center scoreboard">
    <ul className="nav">
      <li>Current Score: {props.currentScore}</li>
      <li>Top Score: {props.topScore}</li>
    </ul>
    <p>{props.message}</p>
  </div>
);

export default Score;
