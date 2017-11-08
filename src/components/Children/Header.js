import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavbarComponent = (props) => {
	return(
		<div>

header.js

			<Navbar className='navi' inverse collapseOnSelect>
			    {/* <Navbar.Header>
			      <Navbar.Toggle />
			    </Navbar.Header> */}
			    <Navbar.Collapse>
			      <Nav className='nav-list'>

			        <NavItem className='nav-item' eventKey={1}>
									<Link className='nav-link' to='/'>Home</Link>
			        </NavItem>

			        <NavItem className='nav-item' eventKey={2}>
									<Link className='nav-link' to='/about'>About</Link>
			        </NavItem>

			        <NavItem className='nav-item' eventKey={3}>
				        	<Link className='nav-link' to='/skills'>Skills</Link>
			        </NavItem>

			        <NavItem className='nav-item' eventKey={4}>
				        	<Link className='nav-link' to='/portfolio'>Portfolio</Link>
			        </NavItem>

			      </Nav>
			    </Navbar.Collapse>
			</Navbar>

		</div>
	);
}

export default NavbarComponent;
