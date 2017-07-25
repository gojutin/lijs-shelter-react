import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import ListItem from './ListItem';

class List extends Component {
  mapListItems = () => {
    return(
      this.props.listData.map((item) => {
        return <ListItem key={item.id} name={item.name} image={item.image} />
      })
    );
  }

  render() {
    return (
      <div className="List">
        <div className="List-Header">
          <h1>{this.props.listName}</h1>
          <Glyphicon glyph="plus" />
        </div>

        {this.mapListItems()}
      </div>
    );
  }
}

export default List;