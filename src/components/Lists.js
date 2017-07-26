import React, { Component } from 'react';
import List from './List';
import AddModal from './AddModal';
import { Col } from 'react-bootstrap';
import { fetchDogs, fetchCats } from '../dbFuncs';

const fbMockPuppies = [
    {id: 0, name: "buster", image: "www.image.com"},
    {id: 1, name: "canoli", image: "www.image.com"},
    {id: 2, name: "thomas", image: "www.image.com"},
    {id: 3, name: "robert", image: "www.image.com"},
    {id: 4, name: "killer", image: "www.image.com"},
];

const fbMockKittens = [
    {id: 0, name: "frisky", image: "www.image.com"},
    {id: 1, name: "terrence", image: "www.image.com"},
    {id: 2, name: "mini", image: "www.image.com"},
    {id: 3, name: "kay", image: "www.image.com"},
    {id: 4, name: "mr bigglesworth", image: "www.image.com"},
];

class Lists extends Component {
  constructor(props) {
    super(props);
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  state = {
    showAddModal: false,
    animal: "",
  }

  componentWillMount() {
    let dogs = fetchDogs();
    let cats = fetchCats();

    console.log(dogs);
    console.log(cats);
  }

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
          <List listName={"Dogs"} listData={fbMockPuppies} toggleAddModal={this.toggleAddModal} />
        </Col>

        <Col xs={6} md={4}>
          <List listName={"Cats"} listData={fbMockKittens} toggleAddModal={this.toggleAddModal} />
        </Col>

        <AddModal {...this.state} toggleAddModal={this.toggleAddModal} />
      </div>
    );
  }
}

export default Lists;