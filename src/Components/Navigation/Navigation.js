import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import logo from "../../logo.jpg";

function Navigation() {
  if (!localStorage.getItem("token")) {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <NavLink tag={Link} to="/">
              <img
                src={logo}
                style={{ width: 50, height: 50, marginTop: -7 }}
                alt="logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink tag={Link} to="/oldtestament">
                Old Testament
              </NavLink>
              <NavLink tag={Link} to="/newtestament">
                New Testament
              </NavLink>
              <NavLink tag={Link} to="/antiguotestamento">
                Antiguo Testamento
              </NavLink>
              <NavLink tag={Link} to="/nuevotestamento">
                Nuevo Testamento
              </NavLink>
              <NavLink tag={Link} to="/temas">
                Temas
              </NavLink>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
          <NavLink tag={Link} to="/login">
            Login
          </NavLink>
        </Navbar>
      </div>
    );
  } else if (localStorage.getItem("token")) {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <NavLink tag={Link} to="/">
              <img
                src={logo}
                style={{ width: 50, height: 50, marginTop: -7 }}
                alt="logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink tag={Link} to="/oldtestament">
                Old Testament
              </NavLink>
              <NavLink tag={Link} to="/newtestament">
                New Testament
              </NavLink>
              <NavLink tag={Link} to="/antiguotestamento">
                Antiguo Testamento
              </NavLink>
              <NavLink tag={Link} to="/nuevotestamento">
                Nuevo Testamento
              </NavLink>
              <NavLink tag={Link} to="/temas">
                Temas
              </NavLink>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
          <NavLink href="/" onClick={() => localStorage.clear()}>
            Logout
          </NavLink>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
