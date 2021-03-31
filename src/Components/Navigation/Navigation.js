import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import {NavLink} from 'react-router-dom'

import "./navigation.css";

class Navigation extends Component {
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
    if (localStorage.getItem("token") === null) {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand to="/">Home </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Bible
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/oldtestament">Old Testament</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/newtestament">New Testament</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Biblia
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/antiguotestamento">
                      Antiguo Testamento
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/nuevotestamento">Nuevo Testamento</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/temas" activeClassName="selected">
                  {" "}
                  Temas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand to="/">Home </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Bible
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/oldtestament">Old Testament</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/newtestament">New Testament</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Biblia
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/antiguotestamento">
                      Antiguo Testamento
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/nuevotestamento">Nuevo Testamento</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/temas">Temas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" onClick={() => localStorage.clear()}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }
}

export default Navigation;
