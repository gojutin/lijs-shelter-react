import React, { Component } from 'react';
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
        <h1>{this.props.listName}</h1>
        {this.mapListItems()}
      </div>
    );
  }
}

export default List;