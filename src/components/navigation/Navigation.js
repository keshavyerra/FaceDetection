import React from 'react';

const Navigation = ({onRouteChange}) => {
	return (
		<div style={{display:"flex", justifyContent:"flex-end"}}>
		   <p onClick={ () => onRouteChange("SignIn")} className=' .br1 pa3 f3 pointer dim link'>Sign Out</p>
		</div>
	);
}

export default Navigation;