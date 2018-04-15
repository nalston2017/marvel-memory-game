import React from 'react';
import './Header.css';

const Header = () => (
  <div className="container-fluid header">
    <h1 className="header-title"><strong>Marvel Memory Game</strong></h1>
    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
    <p>Can you remember the characters you have already selected?</p>
  </div>
)

export default Header;
