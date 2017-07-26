import React, { Component } from 'react';
import List from './List';
import AddModal from './AddModal';
import { Col } from 'react-bootstrap';
import { fetchDogs, fetchCats } from '../dbFuncs';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  state = {
    showAddModal: false,
    animal: "",
    dogs: [],
    cats: [],
  }

  componentWillMount() {
    // Fetch dog and cat arrays
    let dogs = fetchDogs();
    let cats = fetchCats();

    this.setState({
      dogs: dogs,
      cats: cats,
    });
  }

  // Add dog and cat arrays to component state
  toggleAddModal = (animal) => {
    this.setState(prevState => ({
      showAddModal: !prevState.showAddModal,
      animal: animal,
    }));
  }

  render() {
    return (
      <div className="Lists">
        <Col xs={6} md={4}>
          <List listName={"Dogs"} listData={this.state.dogs} toggleAddModal={this.toggleAddModal} />
        </Col>

        <Col xs={6} md={4}>
          <List listName={"Cats"} listData={this.state.cats} toggleAddModal={this.toggleAddModal} />
        </Col>

        <AddModal {...this.state} toggleAddModal={this.toggleAddModal} />
      </div>
    );
  }
}

export default Lists;