import React, { Component } from 'react';
import Logo from '../static/flighttally.jpg';
import SignUp from './SignUp';

const navStyles = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px'
}

const imgStyles = {
  height: '100px',
  width: 'auto',
  marginLeft: '50px'
}

export default class NavBar extends Component {
  render () {
    return (
      <nav className="navbar">
              <span id="navbar-toggle">
                  <i className="fas fa-bars"></i>
              </span>
              <img src={Logo} style={imgStyles} alt="logo"/>
              <ul id="main-nav" style={navStyles}>
                  <li>
                    <a href="#mission" className="nav-links">ABOUT</a>
                  </li>
                  <li>
                      <a href="#contact-form" className="nav-links">CONTACT</a>
                  </li>
                  <li>
                      <a href="#pricing" className="nav-links">PRICING</a>
                  </li>
                  <li>
                    <span><SignUp className="btn"/></span>
                  </li>
              </ul>
      </nav>
    );
  }
}