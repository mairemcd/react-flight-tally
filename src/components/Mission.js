import React, { Component } from 'react';

const boxStyles = {
  backgroundColor: 'rgba(255,255,255, 0.7)',
  fontWeight: '800',
  color: '#293040',
  borderColor: '#293040'
}


export default class Mission extends Component {
  render () {
    return (
      <div className="container-fluid" id="mission">
        <div className="sub-container" style={{paddingTop:'50px',justifyContent:'center'}}>
          <div className="col-md-6">
            <div className="info-box" style={boxStyles}>
              <h2 style={{fontWeight: '800'}}>OUR MISSION</h2>
              <p>Meeting THE need! Between leaving the military, moving, 
                 and securing a new job, you have enough to worry about. 
                 We want to streamline your airline application process 
                 while saving you time and undue stress.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box" style={boxStyles}>
              <h2 style={{fontWeight: '800'}}>OUR VISION</h2>
              <p>Grow to reach all USAF communities and DoD branches, 
                 providing automated solutions to help military pilots 
                 transition seamlessly to commercial aviation careers. 
                 Commercial Logbook automation soon to follow.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}