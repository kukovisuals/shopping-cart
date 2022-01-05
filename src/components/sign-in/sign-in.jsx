import React from 'react';
import FormInput from '../form-input/form-input'
import Botton from '../botton/botton'
import {signInWithGoogle} from '../../firebase/firebase.utils'; 
import './sign-in.styles.scss';

class SignIn extends React.Component{
	constructor(){
		super();

		this.state ={
			email: 'email',
			password: 'password'
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ email: '', password:'' })
	}
	handleChange = event => {
		const {value, name} = event.target
		this.setState({ [name]: value})
	}
	render(){
		return (
			<div className="sign-in">
				<h1>I already have an ccount</h1>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="email" type="email" 
						handleChange={this.handleChange} value={this.state.email} required/>

					<FormInput 
						name="password" type="password" 
						handleChange={this.handleChange} value={this.state.email} required/>
					<div className='buttons'>
						<Botton type="submit"> Sign in </Botton>
						<Botton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </Botton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;