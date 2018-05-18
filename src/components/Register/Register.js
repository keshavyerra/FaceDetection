import React from 'react';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      name:''
    }
  }

  onNameChange = (event) =>{
   this.setState({name: event.target.value})
  }
  onEmailChange = (event) =>{
   this.setState({email: event.target.value})
  }
  onPasswordChange = (event) =>{
   this.setState({password: event.target.value})
  }

  onButtonSubmit = () =>{
    fetch('https://glacial-cliffs-70840.herokuapp.com/register',{
      method:'post',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      }) 
    })
    .then(response => response.json())
    .then(user =>{
    if(user.id) { 
      this.props.loadUser(user)
      this.props.onRouteChange("home")
      }
    })
  }
	render(){
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-1">
<main className="pa3 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
       <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="email-address">Name</label>
        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="text" name="name"  id="name" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="pass1">Password</label>
        <input onChange={this.onPasswordChange} className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="password" name="pass1"  id="pass1" />
      </div>
    </fieldset>
    <div className="">
      <input onClick={ this.onButtonSubmit } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register" />
    </div>
  </div>
</main>
</article>

		);
  }
}

export default Register;