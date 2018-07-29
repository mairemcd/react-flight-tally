import React, { Component } from 'react';
import { Icon } from 'antd';
import SignUp from './SignUp';

const backgroundStyles = {
  backgroundColor: '#293040',
  color: 'white',
  paddingBotom: '50px'
}

const headingStyles = {
  display: 'flex',
  flexDirection: 'column',
  fontWeight: '800',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '50px'
}

export default class Pricing extends Component {
  render () {
    return (
      <div className="container-fluid" style={backgroundStyles} id="pricing">
        <h1 style={{color:'white'}}>PRICING</h1>
        <div className="row" style={headingStyles}>
          <div className="col-md-8" style={headingStyles}>
            <h2 style={{color:'white'}}>YOUR PACKAGE INCLUDES:</h2>
            <div style={{alignItems:'left'}}>
            <p><Icon type="check"/>  Includes excel logbook with extracted &amp; converted flight records</p>
            <p><Icon type="check"/>  2 additional extractions (does not expire)</p>
            <p><Icon type="check"/>  Free record storage and backup on our secure server</p>
            <p><Icon type="check"/>  Unlimited access to our educational powerpoint presentations</p>
            <div className="price-container">
              <span>$99 one-time</span>
              <span><SignUp style={{margin: '0px'}}/></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}