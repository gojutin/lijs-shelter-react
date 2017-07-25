import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';
import { addAnimal } from '../dbFuncs';

class AddModal extends Component {

  state={
    name: "",
    imgUrl: "",
  }

  clearForm = () => {
    this.setState({
      name: "",
      imgUrl: "",
    })
    this.props.toggleAddModal();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, imgUrl } = this.state;

    addAnimal(name, imgUrl)
      .then(() => {
        this.clearForm();
      })
      .catch((error) => {
        console.log(error);
    })
  }

  render() {

    return (
      <Modal show={this.props.showAddModal} onHide={this.props.toggleAddModal}>
        <Modal.Header>
          <Modal.Title>
            Add {this.props.animal}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: 10 + "px"}}>
          <Form horizontal onSubmit={this.onSubmit}>
            <FormGroup >
              <Col sm={12}>
                <FormControl 
                  type="input" 
                  placeholder="Name" 
                  value={this.state.name} 
                  onChange={e => this.setState({name: e.target.value})} 
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalImgUrl">
              <Col sm={12}>
                <FormControl 
                  type="input" 
                  placeholder="Image URL" 
                  value={this.state.imgUrl} 
                  onChange={e => this.setState({imgUrl: e.target.value})} 
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={2}>
                <Button 
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>

    );
  }
}

export default AddModal;
