import React from 'react';
import { Image, Glyphicon } from 'react-bootstrap';

const ListItem = ({ name}) => {
    return (
      <div className="List-Item">
        <Image src="https://pbs.twimg.com/profile_images/378800000508720698/c7723d7d8a07e4cf169e464716115abb.jpeg" className="AnimalImg" rounded />
        {name}
        <Glyphicon glyph="remove" />
      </div>
    );
}

export default ListItem;