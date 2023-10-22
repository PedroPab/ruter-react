import { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavPersonal(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar expand="lg" {...args} >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/../public/logo.svg"
            style={{
              height: 40,
              width: 40
            }}
          />
          Arceliuz
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>

              <Link to='/home'>Home</Link>

            </NavItem>

            <NavItem>

              <Link to='/recepcion'>Recepcion</Link>

            </NavItem>
            <NavItem>

              <Link to='/mapa'>Mapa</Link>

            </NavItem>
            <NavItem>

              <Link to='/internos'>Crear</Link>

            </NavItem>
            <NavItem>

              <Link to='/contabilidad'>Contabilidad</Link>

            </NavItem>
            <NavItem>

              <Link to='/historial'>Historial</Link>

            </NavItem>

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>🐸  </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export { NavPersonal };