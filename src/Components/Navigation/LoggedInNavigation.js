import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav
} from "reactstrap";

class LoggedInNavigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/addtemas">Add Temas</NavbarBrand>
          <NavbarBrand href="/editartemas">Edit Temas</NavbarBrand>
          <NavbarBrand href="/borrartemas">Delete Temas</NavbarBrand>
          <Nav className="ml-auto" navbar></Nav>
        </Navbar>
      </div>
    );
  }
}
export default LoggedInNavigation;
