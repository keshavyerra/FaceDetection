import React from 'react';

const SignIn = ({onRouteChange}) => {
	return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-1">
<main className="pa3 black-80">
  <form className="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label className="db fw6 lh-copy f5" for="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <input className="b pa2 input-reset ba bg-transparent hover-bg-light-red hover-navy w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input onClick={ () => onRouteChange("home")} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f5 link dim black db">Register</a>
    </div>
  </form>
</main>
</article>

		);
}

export default SignIn;