import React from 'react'

import FormInput from '../form-input/form-input'
import Botton from '../botton/botton'

import {auth, createUserProfileDcument} from '../../firebase/firebase.utils'

import './sign-up.scss'

class SignUp extends React.Component{
	constructor(){
		super();

		this.state ={
			displayName: '',
			email: '',
			password:'',
			confirmPassword:''
		}
	}

	handleSubmit = async e => {
		e.preventDefault();
		const {displayName, email, password, confirmPassword } = this.state
		if (password !== confirmPassword) {
			alert("password don't match")
			return 
		}

		try {
			const {user} = await auth.createUserWithEmailAndPassword(email, password)

			await createUserProfileDcument(user, {displayName});
			this.setState({
				displayName: '',
				email: '',
				password:'',
				confirmPassword:''
			});
		} catch (error){
			console.log(error)
		}
	}
	handleChange = e => {
		const {name, value} = e.target;

		this.setState({[name]: value})
	};

	render(){
		const {displayName, email, password, confirmPassword } = this.state;
		return(
			<div className="sign-up">
				<h2 className="title">I don't have an account</h2>
				<span> Sign Up with email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>	
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>	
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="password"
						required
					/>	
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>	
					<Botton type="submit">SIGN UP</Botton>
				</form>
			</div>
			);
	}
}

export default SignUp;