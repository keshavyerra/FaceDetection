import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		
		if(isSignedIn){
			return(
		<div style={{display:"flex", justifyContent:"flex-end"}}>
		   <p onClick={ () => onRouteChange("signout")} className=' .br1 pa3 f3 pointer dim link'>Sign Out</p>
		</div>
		);
	}
	else {
		return(
		<div style={{display:"flex", justifyContent:"flex-end"}}>
		   <p onClick={ () => onRouteChange("signin")} className=' .br1 pa3 f3 pointer dim link'>Sign In</p>
		   <p onClick={ () => onRouteChange("register")} className=' .br1 pa3 f3 pointer dim link'>Register</p>
		</div>
		);
	}
}

export default Navigation;