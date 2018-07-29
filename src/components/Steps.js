import React, { Component } from 'react';
import { Icon } from 'antd';
import ReactPlayer from 'react-player';

const backgroundStyles = {
  backgroundColor: '#293040',
  color: 'white',
  width: '100%',
  fontFamily: 'Lato'
}

const headingStyles = {
  color: 'white',
  fontWeight: '700',
  fontSize: '3vh',
  letterSpacing: '3px',
  marginBottom: '5px',
  paddingTop: '20px'
}

const videoStyles = {
  display:'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '30px'
}

const styles = {
  fontSize: '100px',
  color: 'white'
}

export default class Steps extends Component {
  render () {
    return (
      <div className="container-fluid" style={backgroundStyles}>
        <h1 style={{color:"white",paddingBottom:"20px"}}>HOW IT WORKS</h1>
        <div className="sub-container">
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 sub-box center">
            <Icon type="download" style={styles}/>
            <hr/>
            <h2 style={headingStyles}>EXTRACTS</h2>
            <p>your HARM flight records.</p>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 sub-box center">
            <Icon type="reload" style={styles} />
            <hr/>
            <h2 style={headingStyles}>CONVERTS</h2>
            <p>your military flight time.</p>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4 sub-box center">
            <Icon type="check-square-o" style={styles} />
            <hr/>
            <h2 style={headingStyles}>FORMATS</h2>
            <p>your airline equivalent logbook.</p>
          </div>
        </div>
        <div style={videoStyles}>
        <ReactPlayer 
          url='https://flighttally.com/videos/demo.mp4' 
          playing={true}
          width='50%' 
          height='auto'
        />
        </div>
      </div>
    )
  }
}