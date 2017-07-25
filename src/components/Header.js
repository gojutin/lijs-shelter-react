import React, { Component } from 'react';
import {  Navbar, Nav, NavItem } from 'react-bootstrap';
import AuthModal from './AuthModal';
import { logout } from '../auth';

class Header extends Component {

  state = {
    showAuthModal: false,
    authType: "",
  }

  toggleAuthModal = (type) => {
    this.setState(prevState => ({
      showAuthModal: !prevState.showAuthModal,
      authType: type ? type : this.state.authType,
    }))
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              lijs-shelter-react
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            { this.props.currentUser 
              ? (
                <Nav pullRight>
                  <NavItem eventKey={1} onClick={logout}>Log Out</NavItem>
                </Nav>
              )
              : (
                <Nav pullRight>
                  <NavItem eventKey={2} onClick={() => this.toggleAuthModal("login")}>Log In</NavItem>
                  <NavItem eventKey={3} onClick={() => this.toggleAuthModal("signup")}>Sign Up</NavItem>
                </Nav>
              )

            }
          </Navbar.Collapse>
        </Navbar>
        <AuthModal {...this.state} toggleAuthModal={this.toggleAuthModal}/>
      </div>
    );
  }
}

export default Header;
