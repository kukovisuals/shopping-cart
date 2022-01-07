import React from 'react';
import FormInput from '../form-input/form-input'
import Botton from '../botton/botton'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'; 
import './sign-in.styles.scss';

class SignIn extends React.Component{
	constructor(){
		super();

		this.state ={
			email: '',
			password: ''
		}
	}
	handleChange = event => {
		const {value, name} = event.target
		this.setState({ [name]: value})
	}
	handleSubmit = async event => {
		event.preventDefault()

		const {email, password} = this.state

		try {
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({
				email:'',
				password: ''
			});
		} catch(e){
			console.log('Sing in Error: ', e)
		}
	}
	render(){
		return (
			<div className="sign-in">
				<h1>I already have an ccount</h1>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="email" type="email" 
						handleChange={this.handleChange} 
						value={this.state.email} label="email" required/>

					<FormInput 
						name="password" type="password" 
						handleChange={this.handleChange} 
						value={this.state.password} label="password" required/>
					<div className='buttons'>
						<Botton type="submit"> Sign in </Botton>
						<Botton type="submit" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </Botton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;