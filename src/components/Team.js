import React, { Component } from 'react';
import { Icon } from 'antd';

const imgStyles = {
  borderRadius: '50%',
  width: '300px',
  height: 'auto',
  marginBottom: '20px'
}

const iconStyles = {
  fontSize: '30px'
}

const nameStyles = {
  paddingRight: '10px',
  color: '#293040'
}

export default class Team extends Component {
  render () {
    return (
      <div className="container-fluid" id="team-members">
        <h1 style={{color:'#293040'}}>MEET THE TEAM</h1>
        <div className="sub-container" style={{justifyContent:'space-evenly'}}>
          <div className="col-md-6">
            <div className="member-box">
              <img style={imgStyles} alt="cole-flighttally" src={'https://www.flighttally.com/picture/cole.jpg'}/>
              <h3 style={{fontWeight:'700'}}>
                <span style={nameStyles}>COLE STASNEY</span>   
                <a href="https://www.linkedin.com/in/cole-stasney/"><Icon type="linkedin" style={iconStyles}/></a>
              </h3>
              <p style={{color: '#293040' }}>Software Developer / Army Veteran</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="member-box">
              <img style={imgStyles} alt="taylor-flighttally" src={'https://www.flighttally.com/picture/taylor.png'}/>
              <h3 style={{fontWeight:'700'}}>
                <span style={nameStyles}>TAYLOR ELLINGTON</span>   
                <a href="https://www.linkedin.com/in/taylor-ellington-645b02b1/"><Icon type="linkedin" style={iconStyles}/></a>
              </h3>
              <p style={{color: '#293040' }}>KC-135 Pilot / Instructor</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}