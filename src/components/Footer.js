import React, { Component } from 'react';
import { Icon } from 'antd';
import Logo from '../static/tally.png';

const footerStyles = {
  backgroundColor: '#293040',
  color: 'white'
}

const contactStyles = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flexStart'
}

const logoStyles = {
  margin: '75px'
}

const socialStyles = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '50px'
}

export default class Steps extends Component {
  render () {
    return (
      <div className="container-fluid" style={footerStyles}>
        <div className="sub-container">
          <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 sub-box center" style={logoStyles}>
            <img src={Logo} alt="logo"/>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 sub-box center">
            <hr/>
            <h3 style={{color:'white'}}>LINKS</h3>
            <div style={contactStyles}>
              <a href="#mission" style={{color:'white'}}><p>About</p></a>
              <a href="#team-members" style={{color:'white'}}><p>Team</p></a>
              <a href="#contact-form" style={{color:'white'}}><p>Contact</p></a>
              <a href="#pricing" style={{color:'white'}}><p>Pricing</p></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 sub-box center" style={{height:'100%'}}>
            <hr/>
            <h3 style={{color:'white'}}>ABOUT</h3>
            <div style={contactStyles}>
              <p>flight.tallycorp@gmail.com</p>
              <p>Tel: 720-525-4962</p>
              <p>19272 E Clear Creek Drive</p>
              <p>Parker, Co, 80134</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3 col-xs-3 sub-box center">
            <hr/>
            <h3 style={{color:'white'}}>SOCIAL</h3>
            <div style={socialStyles}>
              <a href={'wwww.instagram.com/flighttally'} target="_blank" style={{color:'white'}}><Icon style={{padding: '10px'}} type="instagram"/></a>
              <a href={'www.linkedin/com/flightally'} target="_blank" style={{color:'white'}}><Icon style={{padding: '10px'}} type="linkedin"/></a>
              <a href={'www.facebook.com/flighttally'} target="_blank" style={{color:'white'}}><Icon style={{padding: '10px'}} type="facebook"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}