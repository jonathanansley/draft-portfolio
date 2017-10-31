import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Jonathan Ansley Portfolio (draft)</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>

            <NavDropdown eventKey={3} title="Portfolio Samples" id="basic-nav-dropdown">
               <MenuItem>TrainTimes</MenuItem>
               <MenuItem>ShoeMarket</MenuItem>
               <MenuItem>Sportify</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Contact Me" id="basic-nav-dropdown">
               <MenuItem>LinkedIn</MenuItem>
               <MenuItem>GitHub</MenuItem>
               <MenuItem>Resume</MenuItem>
            </NavDropdown>

          </Nav>
        </Navbar>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>

        // picture

        // title
        
        // summary

        <p className="App-intro">
          footer text
        </p>
      </div>
    );
  }
}

export default App;
