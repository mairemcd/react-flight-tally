import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Mission from './components/Mission';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Steps from './components/Steps';
import Team from './components/Team';
import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';

const image1 = "https://flighttally.com/picture/plane222.jpeg";
const image2 = "https://flighttally.com/picture/plane222.jpeg";
const image3 = "https://flighttally.com/picture/plane222.jpeg";

export default class App extends Component {
  render() {
    return (
      <div> 
      <NavBar/>   
      <Hero/>
      <Parallax bgImage={image1} style={{filter: 'grayscale(100%)'}}
        strength={400}>
      </Parallax>
      <Steps/>
      <Service/>
      <Parallax bgImage={image3} blur={{min: -1,max:3}} style={{filter: 'grayscale(100%)'}}>
        <Mission/>
      </Parallax>
      <Pricing/>
      <Team/>
      <Parallax bgImage={image2} strength={-100} style={{filter: 'grayscale(100%)'}}>
        <Contact/>
      </Parallax>
      <Footer/> 
    </div>
    );
  }
}
