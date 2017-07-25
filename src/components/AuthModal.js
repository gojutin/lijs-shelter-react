import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap';
import { signup, login } from '../auth';

class AuthModal extends Component {

  state={
    email: "",
    password: "",
  }

  clearForm = () => {
    this.setState({
      email: "",
      password: "",
    })
    this.props.toggleAuthModal();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (this.props.authType === "login") {
      login( email, password )
        .then((user) => {
          console.log(user)
          this.clearForm();
        })
    } else {
      console.log("handle sign up")
      signup(email, password)        
        .then((user) => {
          this.clearForm();
        })
    }
  }

  render() {

    return (

      <Modal show={this.props.showAuthModal} onHide={this.props.toggleAuthModal}>
        <Modal.Header>
          <Modal.Title>
            {this.props.authType === "login" ? "Log In" : "Sign Up"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: 10 + "px"}}>
          <Form horizontal onSubmit={this.onSubmit}>
            <FormGroup >
              <Col sm={12}>
                <FormControl 
                  type="email" 
                  placeholder="Email" 
                  value={this.state.email} 
                  onChange={e => this.setState({email: e.target.value})} 
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={12}>
                <FormControl 
                  type="password" 
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={e => this.setState({password: e.target.value})} 
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={2}>
                <Button 
                  type="submit"
                  onClick={this.onSubmit}
                >
                  {this.props.authType === "login" ? "Log In" : "Sign Up"}
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>

    );
  }
}

export default AuthModal;
