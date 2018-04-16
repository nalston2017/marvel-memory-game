import React from 'react';
import './Tile.css';

const Tile = props => (
     <img
        alt={props.name}
        src={props.image}
        className="superHero-img"
        onClick={() => props.clickTile(props.id)} />
);

export default Tile;
