import React from 'react';

const Register = ({onRouteChange}) => {
	return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-1">
<main className="pa3 black-80">
  <div className="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="Fname">First Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="Fname" name="Fname"  id="Fname" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="LName">Last Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="LName" name="LName"  id="LName" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f4" htmlFor="pass1">Password</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="password" name="pass1"  id="pass1" s/>
      </div>
      <div className="mv3">
      <label className="db fw6 lh-copy f4" htmlFor="pass2">Re-Enter Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="password" name="pass2"  id="pass2"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick={ () => onRouteChange("home")} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register" />
    </div>
  </div>
</main>
</article>

		);
}

export default Register;