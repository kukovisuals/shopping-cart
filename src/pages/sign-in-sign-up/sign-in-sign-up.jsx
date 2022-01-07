import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndOut = () => (
	<div className="sign-in-and-sign-out">
		<SignIn/>
		<SignUp/>
	</div>
)

export default SignInAndOut;