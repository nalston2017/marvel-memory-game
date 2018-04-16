import React from 'react';
import './Tile.css';

const Tile = props => (
  // <div> {props.name} </div>
     <img
        alt={props.name}
        src={props.image}
        className="superHero-img"
        onClick={() => props.clickTile(props.id)} />
);

export default Tile;
