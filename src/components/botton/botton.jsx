import React from 'react';
import './botton.styles.scss';

const Botton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
	<button 
	className=
		{`${inverted ? 'inverted' : '' }
		${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
		{...otherProps} >
		{children}
	</button>
)

export default Botton