import React, { Component } from 'react';
import { Image, Glyphicon } from 'react-bootstrap';

class ListItem extends Component {
  render() {
    return (
      <div className="List-Item">
        <Image src="https://pbs.twimg.com/profile_images/378800000508720698/c7723d7d8a07e4cf169e464716115abb.jpeg" className="AnimalImg" rounded />
        {this.props.name}
        <Glyphicon glyph="remove" />
      </div>
    );
  }
}

export default ListItem;