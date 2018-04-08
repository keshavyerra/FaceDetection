import React from 'react';
import Tilt from 'react-tilt'
import logo from './logo.png'
//import './logo.css'

const Logo = () => {
	return (
		<div className="ma5 mt0">
		<Tilt className="Tilt br2 " options={{ max : 55 }} style={{ height: 185, width: 185 }} >
		<div className="Tilt-inner">
		  <img style={{paddingTop: '5px'}} alt="logo" src={logo} />
		</div>
		</Tilt>
		</div>
		);
}

export default Logo;