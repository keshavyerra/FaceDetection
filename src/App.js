import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Logo from './components/logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import ParticlesOpt from './components/ParticlesOpt'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Particles className="particles" params={ParticlesOpt} />
       <Navigation />
       <Logo />
       <Rank />
       <ImageForm className="bgposition" />
      </div>
      );
  }
}

export default App;
