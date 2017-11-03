import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './imgs/headshot.JPG';
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
               <MenuItem href="/">TrainTimes</MenuItem>
               <MenuItem href="/">ShoeMarket</MenuItem>
               <MenuItem href="/">Sportify</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Contact Me" id="basic-nav-dropdown">
               <MenuItem eventKey="4.1">LinkedIn</MenuItem>
              //  https://www.linkedin.com/in/jonathanansley/

               <MenuItem eventKey="4.2">GitHub</MenuItem>
// https://github.com/jonathanansley/homework-Bootstrap-Portfolio

               <MenuItem eventKey="4.3">Resume</MenuItem>
              //  Google document
            </NavDropdown>

          </Nav>
        </Navbar>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>


      <body>
        body text - description
      </body>

        <p className="App-intro">
          Copyright © 2017 Jonathan Ansley
        </p>
      </div>
    );
  }
}

export default App;
