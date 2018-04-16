import React from 'react';
import './Characters.css';
import Image from "../Images";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.character,
      selected: this.props.selected
    };
  }

  componentDidMount() {
    console.log(this.props.id, this.props.character, this.props.selected, this.props.counterCheck);
  }

  render() {
    return (<div onCLick={() => this.props.counterCheck(this.props.character, this.props.selected)} className={"col-3 mt-3"}>
      <Image imgSrc={this.props.character}/>
    </div>)
  }
}

export default Character;
