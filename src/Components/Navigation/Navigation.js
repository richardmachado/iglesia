import React, { Component} from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';



class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        
        if (localStorage.getItem('token') === null) {
            return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Home </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Nav className="ml-auto" navbar>
                       
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Bible
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/oldtestament">Old Testament</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/newtestament">New Testament</NavLink>
                                    </DropdownItem>
                                  
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Biblia
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/antiguotestamento">Antiguo Testamento</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/nuevotestamento">Nuevo Testamento</NavLink>
                                    </DropdownItem>
                                  
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <NavLink href="/temas">Temas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                           
                        </Nav>
                
                    </Navbar>
                </div>
            )
        } else {
            return (
              <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">Home </NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Bible
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink href="/oldtestament">Old Testament</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="/newtestament">New Testament</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Biblia
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <NavLink href="/antiguotestamento">
                            Antiguo Testamento
                          </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                          <NavLink href="/nuevotestamento">
                            Nuevo Testamento
                          </NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <NavItem>
                      <NavLink href="/temas">Temas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" onClick={()=>localStorage.clear()}>
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

export default Header