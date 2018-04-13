import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';
import Logo from './components/logo/Logo';
import Clarifai from 'clarifai';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import ParticlesOpt from './components/ParticlesOpt'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


const app = new Clarifai.App({
 apiKey: 'e59ac683ee4c4dd99634da9636c6c66a'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    }
  }

 calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

 displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

 onRouteChange = (route) => {
  if(route === 'signout') {
    this.setState({isSignedIn: false})
  }else if(route === 'home') {
    this.setState({isSignedIn: true})
  }
this.setState({route: route});

 }


  onButtonClick = () => {
     this.setState({imageUrl: this.state.input});
     app.models.predict(Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));   
}

  render() {
    return (
      <div className="App">
       <Particles className="particles" params={ParticlesOpt} /> 
       <Navigation isSignedIn={this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
       {this.state.route === 'home' ?
       <div>
       <Logo />
       <Rank />
       <ImageForm onInputChange={this.onInputChange} 
       onButtonClick = {this.onButtonClick} />
       <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>
       </div>  
       : (
        this.state.route === 'signin' ?
        <SignIn onRouteChange = {this.onRouteChange} />
        : <Register onRouteChange = {this.onRouteChange} />
        )
       
       }    
      </div>
      );
    
  }
}

export default App;
