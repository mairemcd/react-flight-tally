import React, { Component } from "react";
import ReactPlayer from 'react-player';


const videoStyles = {
  filter: 'grayscale(100%)',
  height: '200px',
  width: 'auto',
  marginBottom: '-5px'
}

export default class Hero extends Component {
  render () {
    return (
      <div>
        <ReactPlayer 
          url='https://flighttally.com/1352.mp4' 
          playing={true} 
          loop={true}
          width='100%' 
          muted={true}
          height='auto'
          style={videoStyles}
        />
    </div>
    );
  }
}

