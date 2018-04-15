import React from 'react';
import './Photos.css';

const Tile = props => (
     <img
        alt={props.name}
        src={props.image}
        className="character-img"
        onClick={() => props.clickTile(props.id)}/>
);

export default Photos;
