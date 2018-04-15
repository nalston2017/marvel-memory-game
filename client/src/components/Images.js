import React from 'react';

const Image = (props) => (
    <img className={"img-thumbnail"} src={require(`../images/${props.imgSrc}.jpg`)} alt={props.imgSrc}/>
);
console.log(Image);

export default Image;
