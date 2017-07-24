import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="List-Item">
        {this.props.name}
      </div>
    );
  }
}

export default ListItem;