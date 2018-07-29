import React, { Component } from 'react';
import '../App.css';


const headingStyles = {
  fontWeight: '700'
}

const numStyles = {
  color: '#BACEE7'
}

const spanStyles = {
  fontSize: '20px',
  letterSpacing: '3px'
}

const subBoxStyles = {
  justifyContent: 'flex-start'
}

export default class Service extends Component {
  render () {
    return (
      <div className="container-fluid">
        <h1 style={{color: '#293040'}}>OUR SERVICE</h1>
        <div className="sub-container">
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 sub-box" style={subBoxStyles}>
            <div style={spanStyles}>
              <span style={numStyles}>01 / </span>
              <span style={headingStyles}>FAST</span>
            </div>
            <p>Your logbooks are extracted using Flight Tally's 
               custom made, lightning fast OCR software that produces
               incredibly accurate results.</p>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 sub-box" style={subBoxStyles}>
            <div style={spanStyles}>
              <span style={numStyles}>02 / </span>
              <span style={headingStyles}>EASY</span>
            </div>
            <p>Simply upload your logbooks on the profile page 
                and then sit back and wait! Flight Tally will 
                handle the rest and return your completed logbook 
                after it has been parsed by our software.</p>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 sub-box" style={subBoxStyles}>
            <div style={spanStyles}>
              <span style={numStyles}>03 / </span>
              <span style={headingStyles}>SECURE</span>
            </div>
            <p>Flight Tally utilizes Stripe's secure credit card 
                payment service. We keep the customers security in 
                mind by not storing any payment information on our 
                servers and by using secure methods to process 
                transactions. </p>
        </div>
        </div>
      </div>
    )
  }
}